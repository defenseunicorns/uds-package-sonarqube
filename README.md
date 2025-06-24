# 🏭 UDS SonarQube Package

[<img alt="Made for UDS" src="https://raw.githubusercontent.com/defenseunicorns/uds-common/refs/heads/main/docs/assets/made-for-uds-silver.svg" height="20px"/>](https://github.com/defenseunicorns/uds-core)
[![Latest Release](https://img.shields.io/github/v/release/defenseunicorns/uds-package-sonarqube)](https://github.com/defenseunicorns/uds-package-sonarqube/releases)
[![Build Status](https://img.shields.io/github/actions/workflow/status/defenseunicorns/uds-package-sonarqube/release.yaml)](https://github.com/defenseunicorns/uds-package-sonarqube/actions/workflows/release.yaml)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/defenseunicorns/uds-package-sonarqube/badge)](https://api.securityscorecards.dev/projects/github.com/defenseunicorns/uds-package-sonarqube)

This package is designed for use as part of a [UDS Software Factory](https://github.com/defenseunicorns/uds-software-factory) bundle deployed on [UDS Core](https://github.com/defenseunicorns/uds-core).

> SonarQube is an open-source platform that continuously inspects code quality through static analysis, detecting bugs, code smells, and security vulnerabilities across 29 programming languages. It provides detailed reports on code duplication, coding standards, unit tests, code coverage, code complexity, and more.

## Prerequisites

SonarQube needs connection to a PostgreSQL instance either in cluster or external. You can learn more about configuring this (and other options) in the [configuration documentation](./docs/configuration.md).

## Flavors

| Flavor    | Description                                                      | Example Creation                     |
| --------- | ---------------------------------------------------------------- | ------------------------------------ |
| upstream  | Uses images from docker.io within the package.                   | `zarf package create . -f upstream`  |
| registry1 | Uses images from registry1.dso.mil within the package.           | `zarf package create . -f registry1` |
| unicorn   | Uses images from registry1.dso.mil within the package.           | `zarf package create . -f unicorn`   |

## Releases

The released packages can be found in [ghcr](https://github.com/defenseunicorns/uds-package-sonarqube/pkgs/container/packages%2Fuds%2Fsonarqube).

## UDS Tasks (for local dev and CI)

*For local dev, this requires you install [uds-cli](https://github.com/defenseunicorns/uds-cli?tab=readme-ov-file#install)

> :white_check_mark: **Tip:** To get a list of tasks to run you can use `uds run --list`!

## Contributing

Please see the [CONTRIBUTING.md](./CONTRIBUTING.md)

## Development

When developing this package it is ideal to utilize the json schemas for UDS Bundles, Zarf Packages and Maru Tasks. This involves configuring your IDE to provide schema validation for the respective files used by each application. For guidance on how to set up this schema validation, please refer to the [guide](https://github.com/defenseunicorns/uds-common/blob/main/docs/uds-packages/development/development-ide-configuration.md) in uds-common.
