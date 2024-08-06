#! /bin/sh

set -e

cp /jmx_prometheus_javaagent-$JMX_PROMETHEUS_PLUGIN_VERSION.jar /data/jmx_prometheus_javaagent.jar

echo "finished loading jmx prometheus plugin"
