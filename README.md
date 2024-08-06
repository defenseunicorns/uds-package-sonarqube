# 🏭 UDS SonarQube Zarf Package

[<img alt="Made for UDS" src="https://raw.githubusercontent.com/defenseunicorns/uds-common/main/docs/made-for-uds.svg" height="20px"/>](https://github.com/defenseunicorns/uds-core)
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
| `upstream` | Uses upstream images within the package | `zarf package create . -f upstream` |
| `registry1` | Uses images from registry1.dso.mil within the package | `zarf package create . -f registry1` |

> **_NOTE:_**  `registry1` flavor only supports the amd64 architecture

## Releases

The released packages can be found in [ghcr](https://github.com/defenseunicorns/uds-package-sonarqube/pkgs/container/packages%2Fuds%2Fsonarqube).

## UDS Tasks (for local dev and CI)

*For local dev, this requires you install [uds-cli](https://github.com/defenseunicorns/uds-cli?tab=readme-ov-file#install)

> :white_check_mark: **Tip:** To get a list of tasks to run you can use `uds run --list`!

## Contributing

Please see the [CONTRIBUTING.md](./CONTRIBUTING.md)

## Notes:
This package is currently using registry1 chart for both flavors. This is because the upstream chart depends on 'hostname' and 'wget' to be available in the images, and the registry1 images do not include these tools.

## Development

When developing this package it is ideal to utilize the json schemas for UDS Bundles, Zarf Packages and Maru Tasks. This involves configuring your IDE to provide schema validation for the respective files used by each application. For guidance on how to set up this schema validation, please refer to the [guide](https://github.com/defenseunicorns/uds-common/blob/main/docs/development-ide-configuration.md) in uds-common.
