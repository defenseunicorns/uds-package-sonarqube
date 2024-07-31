# Configuration

SonarQube in this package is configured through the upstream [SonarQube chart](https://github.com/SonarSource/helm-chart-sonarqube) as well as a UDS configuration chart that supports the following:

## Networking

Network policies are controlled via the `uds-sonarqube-config` chart in accordance with the [common patterns for networking within UDS Software Factory](https://github.com/defenseunicorns/uds-software-factory/blob/main/docs/networking.md).  SonarQube interacts with Postgresql externally and supports the following keys:

- `postgres`: sets network policies for accessing a Postgres database from the SonarQube pod
- `custom`: sets custom network policies for the SonarQube namespace - this allows for custom integrations with other services

## Database

SonarQube uses Postgres as its backing database service and supports the [common database providers within UDS Software Factory](https://github.com/defenseunicorns/uds-software-factory/blob/main/docs/database.md).  

### Manual Database Connection

If you are using the [UDS Postgres Operator](https://github.com/defenseunicorns/uds-package-postgres-operator/) or another external database that uses usernames/passwords you can use the following Helm overrides to configure it:

#### `uds-sonarqube-config` chart:

> [!IMPORTANT]
> The `postgres.password` setting is not applicable when using the UDS Postgres Operator package or when supplying a secret manually!

- `postgres.password` - provides a password to generate a secret to pass to SonarQube


#### `sonarqube` chart:

> [!IMPORTANT]
> The `jdbcOverwrite.jdbcSecretName` and `jdbcOverwrite.jdbcSecretPasswordKey` settings are not applicable when providing a password to the `uds-sonarqube-config` chart manually.

- `jdbcOverwrite.jdbcUsername` - provides the username to use when connecting to the database (i.e. `sonarqube.sonarqube`)
- `jdbcOverwrite.jdbcSecretName` - provides the secret that contains the database password (defaults to `sonarqube-postgres`)
- `jdbcOverwrite.jdbcSecretPasswordKey` - provides the secret key that contains the database password (defaults to `password`)
- `jdbcOverwrite.jdbcUrl` - provides the endpoint, port and database name to use (i.e. `jdbc:postgresql://pg-cluster.postgres.svc.cluster.local:5432/sonarqubedb`)

### IAM Roles for Service Accounts

The Software Factory team has not yet tested IRSA with AWS RDS - there is an open issue linked below with further linked issues to test this that could act as a starting point to implement:

https://github.com/defenseunicorns/uds-software-factory/issues/45
