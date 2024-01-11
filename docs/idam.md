# IDAM integration with uds-package-sonarqube

The sonarqube package is preconfigured to work with an IDAM solution, but IDAM is disabled by default.

## IDAM Variables

These Zarf variables are mapped to sonarqube helm chart values that are documented [here.](https://docs.sonarsource.com/sonarqube/latest/instance-administration/authentication/saml/overview/#settings)

| Key                                    | Type   | Default | Description                                   |
|----------------------------------------|:------:|:-------:|-----------------------------------------------|
| SONARQUBE_IDAM_ENABLED                 | bool   | `false` | Enables/disables IDAM                         |
| SONARQUBE_IDAM_CLIENT_ID               | string | `""`    | The ID of the client used to auth             |
| SONARQUBE_IDAM_PROVIDER_NAME           | string | `""`    | Name of the identity provider                 |
| SONARQUBE_IDAM_REALM_URL               | string | `""`    | The URL for the realm used for auth           |
| SONARQUBE_IDAM_SAML_CERT               | string | `""`    | The SAML certificate from keycloak            |
| SONARQUBE_IDAM_ATTR_LOGIN              | string | `""`    | The IDAM attribute to map login to            |
| SONARQUBE_IDAM_ATTR_NAME               | string | `""`    | The IDAM attribute to map name to             |
| SONARQUBE_IDAM_ATTR_EMAIL              | string | `""`    | The IDAM attribute to map email to            |
| SONARQUBE_IDAM_ATTR_GROUP              | string | `""`    | The IDAM attribute to map groups to, optional |
