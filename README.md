# 🏭 UDS SonarQube Zarf Package

[![Latest Release](https://img.shields.io/github/v/release/defenseunicorns/uds-package-sonarqube)](https://github.com/defenseunicorns/uds-package-sonarqube/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/defenseunicorns/uds-package-sonarqube/tag-and-release.yaml)](https://github.com/defenseunicorns/uds-package-sonarqube/actions/workflows/tag-and-release.yaml)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/defenseunicorns/uds-package-sonarqube/badge)](https://api.securityscorecards.dev/projects/github.com/defenseunicorns/uds-package-sonarqube)

This package is designed for use as part of a [UDS Software Factory](https://github.com/defenseunicorns/uds-software-factory) bundle deployed on [UDS Core](https://github.com/defenseunicorns/uds-core).

## Prerequisites

SonarQube needs connection to a PostgreSQL instance either in cluster or external. It finds this connection via the `sonarqube_db_endpoint` variable declared in the zarf package and configured (as an example) at deploy time by the [uds bundle config](./bundle/uds-config.yaml).

For local testing and CI, SonarQube is bundled with the [dev-postgres package](ghcr.io/defenseunicorns/packages/uds/dev-postgres).

## Flavors

| Flavor | Description | Example Creation |
| ------ | ----------- | ---------------- |
| `upstream-ce` | Uses upstream images within the package | `zarf package create . -f upstream-ce` |
| `registry1` | Uses images from registry1.dso.mil within the package | `zarf package create . -f registry1` |

> **_NOTE:_**  `registry1` flavor only supports the amd64 architecture

## Releases

The released packages can be found in [ghcr](https://github.com/defenseunicorns/uds-package-sonarqube/pkgs/container/packages%2Fuds%2Fsonarqube).

## UDS Tasks (for local dev and CI)

*For local dev, this requires installing [uds-cli](https://github.com/defenseunicorns/uds-cli?tab=readme-ov-file#install)

| Task | Description | Example |
| ---- | ----------- | ------- |
| setup-cluster | Uses the `k3d-core-istio` bundle to create a cluster for testing against | `uds run setup-cluster` |
| create-package | Creates just the SonarQube package | `uds run create-package --set FLAVOR=<flavor>` |
| create-test-bundle | Creates SonarQube and SonarQube dependency packages and then bundles them | `uds run create-test-bundle` |
| deploy-package | Deploy SonarQube package only | `uds run deploy-package` |
| deploy-test-bundle | Deploy SonarQube and SonarQube dependency bundle | `uds run deploy-test-bundle` |
| test-package | Run checks against a deployed package or bundle | `uds run test-package` |
| cleanup | Teardown the cluster | `uds run cleanup` |

## Contributing

Please see the [CONTRIBUTING.md](./CONTRIBUTING.md)
