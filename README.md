# uds-package-sonarqube
UDS Sonarqube Zarf Package

## Flavors
| Flavor | example creation |
| ------ | ---------------- |
| upstream-ce | `zarf package create . -f upstream-ce` |
| registry1 | `zarf package create . -f registry1` |

## Tasks
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