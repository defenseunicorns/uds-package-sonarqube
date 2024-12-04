#! /bin/sh
# Copyright 2024 Defense Unicorns
# SPDX-License-Identifier: AGPL-3.0-or-later OR LicenseRef-Defense-Unicorns-Commercial


set -e

cp "/jmx_prometheus_javaagent-$JMX_PROMETHEUS_PLUGIN_VERSION.jar" /data/jmx_prometheus_javaagent.jar

echo "finished loading jmx prometheus plugin"
