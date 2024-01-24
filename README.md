# uds-package-sonarqube
UDS Sonarqube Zarf Package

This package is purposed for use as part of the software factory bundle deployed on UDS-CORE (https://github.com/defenseunicorns/uds-core).

## Pre-requisites

Sonarqube needs connection to a postgres instance either in cluster or external. It finds this connection via the `sonarqube_db_endpoint` variable declared in the zarf package and configured (as an example) at deploy time by the [uds bundle config](./bundle/uds-config.yaml).

For local testing and CI, Sonarqube is bundled with the [dev-postgres package](ghcr.io/defenseunicorns/packages/uds/dev-postgres)

## Flavors

| Flavor | Example Creation |
| ------ | ---------------- |
| upstream-ce | `zarf package create . -f upstream-ce` |
| registry1 | `zarf package create . -f registry1` |

## Package

The deployment package can be found in [ghcr](https://github.com/defenseunicorns/uds-package-sonarqube/pkgs/container/packages%2Fuds%2Fsonarqube).


## UDS Tasks (for local dev and CI)
*For local dev, this requires you install [uds-cli](https://github.com/defenseunicorns/uds-cli?tab=readme-ov-file#install)

| Task | Description | Example |
| ---- | ----------- | ------- |
| setup-cluster | Uses the `k3d-core-istio` bundle to create a cluster for testing against | `uds run setup-cluster` |
| create-package | Creates just the sonarqube package | `uds run create-package --set FLAVOR=<flavor>` |
| create-test-bundle | Creates sonarqube and sonarqube dependency packages and then bundles them | `uds run create-test-bundle` |
| deploy-package | Deploy Sonarqube package only | `uds run deploy-package` |
| deploy-test-bundle | Deploy Sonarqube and Sonarqube dependency bundle | `uds run deploy-test-bundle` |
| test-package | Run checks against a deployed package or bundle | `uds run test-package` |
| cleanup | Teardown the cluster | `uds run cleanup` |

## Values

See: 
1. [/values/sonarqube-values.yaml](/values/sonarqube-values.yaml)
2. [/values/upstream.yaml](/values/upstream.yaml)

## Contributing
Please see the [CONTRIBUTING.md](./CONTRIBUTING.md)