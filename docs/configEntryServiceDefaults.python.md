# `consul_config_entry_service_defaults`

Refer to the Terraform Registory for docs: [`consul_config_entry_service_defaults`](https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults).

# `configEntryServiceDefaults` Submodule <a name="`configEntryServiceDefaults` Submodule" id="@cdktf/provider-consul.configEntryServiceDefaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceDefaults <a name="ConfigEntryServiceDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults consul_config_entry_service_defaults}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaults(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expose: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExpose]],
  name: str,
  protocol: str,
  balance_inbound_connections: str = None,
  destination: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsDestination]] = None,
  envoy_extensions: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsEnvoyExtensions]] = None,
  external_sni: str = None,
  id: str = None,
  local_connect_timeout_ms: typing.Union[int, float] = None,
  local_request_timeout_ms: typing.Union[int, float] = None,
  max_inbound_connections: typing.Union[int, float] = None,
  mesh_gateway: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsMeshGateway]] = None,
  meta: typing.Mapping[str] = None,
  mode: str = None,
  mutual_tls_mode: str = None,
  namespace: str = None,
  partition: str = None,
  transparent_proxy: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsTransparentProxy]] = None,
  upstream_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfig]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.expose">expose</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]</code> | expose block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the service you are setting the defaults for. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Specifies the default protocol for the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.balanceInboundConnections">balance_inbound_connections</a></code> | <code>str</code> | Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]</code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.envoyExtensions">envoy_extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]</code> | envoy_extensions block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.externalSni">external_sni</a></code> | <code>str</code> | Specifies the TLS server name indication (SNI) when federating with an external system. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.localConnectTimeoutMs">local_connect_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.localRequestTimeoutMs">local_request_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the timeout for HTTP requests to the local application instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.maxInboundConnections">max_inbound_connections</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of concurrent inbound connections to each service instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.meshGateway">mesh_gateway</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies a set of custom key-value pairs to add to the Consul KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Specifies a mode for how the service directs inbound and outbound traffic. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.mutualTlsMode">mutual_tls_mode</a></code> | <code>str</code> | Controls whether mutual TLS is required for incoming connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Specifies the Consul namespace that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.partition">partition</a></code> | <code>str</code> | Specifies the name of the name of the Consul admin partition that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.transparentProxy">transparent_proxy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]</code> | transparent_proxy block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.upstreamConfig">upstream_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]</code> | upstream_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expose`<sup>Required</sup> <a name="expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.expose"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]

expose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#expose ConfigEntryServiceDefaults#expose}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the service you are setting the defaults for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.protocol"></a>

- *Type:* str

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

##### `balance_inbound_connections`<sup>Optional</sup> <a name="balance_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.balanceInboundConnections"></a>

- *Type:* str

Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#balance_inbound_connections ConfigEntryServiceDefaults#balance_inbound_connections}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.destination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#destination ConfigEntryServiceDefaults#destination}

---

##### `envoy_extensions`<sup>Optional</sup> <a name="envoy_extensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.envoyExtensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]

envoy_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#envoy_extensions ConfigEntryServiceDefaults#envoy_extensions}

---

##### `external_sni`<sup>Optional</sup> <a name="external_sni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.externalSni"></a>

- *Type:* str

Specifies the TLS server name indication (SNI) when federating with an external system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#external_sni ConfigEntryServiceDefaults#external_sni}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_connect_timeout_ms`<sup>Optional</sup> <a name="local_connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.localConnectTimeoutMs"></a>

- *Type:* typing.Union[int, float]

Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#local_connect_timeout_ms ConfigEntryServiceDefaults#local_connect_timeout_ms}

---

##### `local_request_timeout_ms`<sup>Optional</sup> <a name="local_request_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.localRequestTimeoutMs"></a>

- *Type:* typing.Union[int, float]

Specifies the timeout for HTTP requests to the local application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#local_request_timeout_ms ConfigEntryServiceDefaults#local_request_timeout_ms}

---

##### `max_inbound_connections`<sup>Optional</sup> <a name="max_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.maxInboundConnections"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum number of concurrent inbound connections to each service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_inbound_connections ConfigEntryServiceDefaults#max_inbound_connections}

---

##### `mesh_gateway`<sup>Optional</sup> <a name="mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.meshGateway"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.meta"></a>

- *Type:* typing.Mapping[str]

Specifies a set of custom key-value pairs to add to the Consul KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#meta ConfigEntryServiceDefaults#meta}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.mode"></a>

- *Type:* str

Specifies a mode for how the service directs inbound and outbound traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}

---

##### `mutual_tls_mode`<sup>Optional</sup> <a name="mutual_tls_mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.mutualTlsMode"></a>

- *Type:* str

Controls whether mutual TLS is required for incoming connections to this service.

This setting is only supported for services with transparent proxy enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mutual_tls_mode ConfigEntryServiceDefaults#mutual_tls_mode}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.namespace"></a>

- *Type:* str

Specifies the Consul namespace that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.partition"></a>

- *Type:* str

Specifies the name of the name of the Consul admin partition that the configuration entry applies to.

Refer to Admin Partitions for additional information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}

---

##### `transparent_proxy`<sup>Optional</sup> <a name="transparent_proxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.transparentProxy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]

transparent_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#transparent_proxy ConfigEntryServiceDefaults#transparent_proxy}

---

##### `upstream_config`<sup>Optional</sup> <a name="upstream_config" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.upstreamConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]

upstream_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#upstream_config ConfigEntryServiceDefaults#upstream_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions">put_envoy_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose">put_expose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway">put_mesh_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy">put_transparent_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig">put_upstream_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetBalanceInboundConnections">reset_balance_inbound_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetEnvoyExtensions">reset_envoy_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetExternalSni">reset_external_sni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalConnectTimeoutMs">reset_local_connect_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalRequestTimeoutMs">reset_local_request_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMaxInboundConnections">reset_max_inbound_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeshGateway">reset_mesh_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMutualTlsMode">reset_mutual_tls_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetTransparentProxy">reset_transparent_proxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetUpstreamConfig">reset_upstream_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination"></a>

```python
def put_destination(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]

---

##### `put_envoy_extensions` <a name="put_envoy_extensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions"></a>

```python
def put_envoy_extensions(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsEnvoyExtensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]

---

##### `put_expose` <a name="put_expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose"></a>

```python
def put_expose(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExpose]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]

---

##### `put_mesh_gateway` <a name="put_mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway"></a>

```python
def put_mesh_gateway(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsMeshGateway]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]

---

##### `put_transparent_proxy` <a name="put_transparent_proxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy"></a>

```python
def put_transparent_proxy(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsTransparentProxy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]

---

##### `put_upstream_config` <a name="put_upstream_config" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig"></a>

```python
def put_upstream_config(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]

---

##### `reset_balance_inbound_connections` <a name="reset_balance_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetBalanceInboundConnections"></a>

```python
def reset_balance_inbound_connections() -> None
```

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_envoy_extensions` <a name="reset_envoy_extensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetEnvoyExtensions"></a>

```python
def reset_envoy_extensions() -> None
```

##### `reset_external_sni` <a name="reset_external_sni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetExternalSni"></a>

```python
def reset_external_sni() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_connect_timeout_ms` <a name="reset_local_connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalConnectTimeoutMs"></a>

```python
def reset_local_connect_timeout_ms() -> None
```

##### `reset_local_request_timeout_ms` <a name="reset_local_request_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalRequestTimeoutMs"></a>

```python
def reset_local_request_timeout_ms() -> None
```

##### `reset_max_inbound_connections` <a name="reset_max_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMaxInboundConnections"></a>

```python
def reset_max_inbound_connections() -> None
```

##### `reset_mesh_gateway` <a name="reset_mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeshGateway"></a>

```python
def reset_mesh_gateway() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_mutual_tls_mode` <a name="reset_mutual_tls_mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMutualTlsMode"></a>

```python
def reset_mutual_tls_mode() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_transparent_proxy` <a name="reset_transparent_proxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetTransparentProxy"></a>

```python
def reset_transparent_proxy() -> None
```

##### `reset_upstream_config` <a name="reset_upstream_config" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetUpstreamConfig"></a>

```python
def reset_upstream_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConfigEntryServiceDefaults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaults.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaults.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConfigEntryServiceDefaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigEntryServiceDefaults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigEntryServiceDefaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceDefaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList">ConfigEntryServiceDefaultsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensions">envoy_extensions</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList">ConfigEntryServiceDefaultsEnvoyExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.expose">expose</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList">ConfigEntryServiceDefaultsExposeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGateway">mesh_gateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList">ConfigEntryServiceDefaultsMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxy">transparent_proxy</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList">ConfigEntryServiceDefaultsTransparentProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfig">upstream_config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList">ConfigEntryServiceDefaultsUpstreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnectionsInput">balance_inbound_connections_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destinationInput">destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensionsInput">envoy_extensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.exposeInput">expose_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSniInput">external_sni_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMsInput">local_connect_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMsInput">local_request_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnectionsInput">max_inbound_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGatewayInput">mesh_gateway_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.metaInput">meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsModeInput">mutual_tls_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxyInput">transparent_proxy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfigInput">upstream_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnections">balance_inbound_connections</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSni">external_sni</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMs">local_connect_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMs">local_request_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnections">max_inbound_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsMode">mutual_tls_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destination"></a>

```python
destination: ConfigEntryServiceDefaultsDestinationList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList">ConfigEntryServiceDefaultsDestinationList</a>

---

##### `envoy_extensions`<sup>Required</sup> <a name="envoy_extensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensions"></a>

```python
envoy_extensions: ConfigEntryServiceDefaultsEnvoyExtensionsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList">ConfigEntryServiceDefaultsEnvoyExtensionsList</a>

---

##### `expose`<sup>Required</sup> <a name="expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.expose"></a>

```python
expose: ConfigEntryServiceDefaultsExposeList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList">ConfigEntryServiceDefaultsExposeList</a>

---

##### `mesh_gateway`<sup>Required</sup> <a name="mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGateway"></a>

```python
mesh_gateway: ConfigEntryServiceDefaultsMeshGatewayList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList">ConfigEntryServiceDefaultsMeshGatewayList</a>

---

##### `transparent_proxy`<sup>Required</sup> <a name="transparent_proxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxy"></a>

```python
transparent_proxy: ConfigEntryServiceDefaultsTransparentProxyList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList">ConfigEntryServiceDefaultsTransparentProxyList</a>

---

##### `upstream_config`<sup>Required</sup> <a name="upstream_config" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfig"></a>

```python
upstream_config: ConfigEntryServiceDefaultsUpstreamConfigList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList">ConfigEntryServiceDefaultsUpstreamConfigList</a>

---

##### `balance_inbound_connections_input`<sup>Optional</sup> <a name="balance_inbound_connections_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnectionsInput"></a>

```python
balance_inbound_connections_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destinationInput"></a>

```python
destination_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]

---

##### `envoy_extensions_input`<sup>Optional</sup> <a name="envoy_extensions_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensionsInput"></a>

```python
envoy_extensions_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsEnvoyExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]

---

##### `expose_input`<sup>Optional</sup> <a name="expose_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.exposeInput"></a>

```python
expose_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExpose]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]

---

##### `external_sni_input`<sup>Optional</sup> <a name="external_sni_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSniInput"></a>

```python
external_sni_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_connect_timeout_ms_input`<sup>Optional</sup> <a name="local_connect_timeout_ms_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMsInput"></a>

```python
local_connect_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_request_timeout_ms_input`<sup>Optional</sup> <a name="local_request_timeout_ms_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMsInput"></a>

```python
local_request_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_inbound_connections_input`<sup>Optional</sup> <a name="max_inbound_connections_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnectionsInput"></a>

```python
max_inbound_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mesh_gateway_input`<sup>Optional</sup> <a name="mesh_gateway_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGatewayInput"></a>

```python
mesh_gateway_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.metaInput"></a>

```python
meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mutual_tls_mode_input`<sup>Optional</sup> <a name="mutual_tls_mode_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsModeInput"></a>

```python
mutual_tls_mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `transparent_proxy_input`<sup>Optional</sup> <a name="transparent_proxy_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxyInput"></a>

```python
transparent_proxy_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsTransparentProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]

---

##### `upstream_config_input`<sup>Optional</sup> <a name="upstream_config_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfigInput"></a>

```python
upstream_config_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]

---

##### `balance_inbound_connections`<sup>Required</sup> <a name="balance_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnections"></a>

```python
balance_inbound_connections: str
```

- *Type:* str

---

##### `external_sni`<sup>Required</sup> <a name="external_sni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSni"></a>

```python
external_sni: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_connect_timeout_ms`<sup>Required</sup> <a name="local_connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMs"></a>

```python
local_connect_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_request_timeout_ms`<sup>Required</sup> <a name="local_request_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMs"></a>

```python
local_request_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_inbound_connections`<sup>Required</sup> <a name="max_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnections"></a>

```python
max_inbound_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `mutual_tls_mode`<sup>Required</sup> <a name="mutual_tls_mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsMode"></a>

```python
mutual_tls_mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceDefaultsConfig <a name="ConfigEntryServiceDefaultsConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expose: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExpose]],
  name: str,
  protocol: str,
  balance_inbound_connections: str = None,
  destination: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsDestination]] = None,
  envoy_extensions: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsEnvoyExtensions]] = None,
  external_sni: str = None,
  id: str = None,
  local_connect_timeout_ms: typing.Union[int, float] = None,
  local_request_timeout_ms: typing.Union[int, float] = None,
  max_inbound_connections: typing.Union[int, float] = None,
  mesh_gateway: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsMeshGateway]] = None,
  meta: typing.Mapping[str] = None,
  mode: str = None,
  mutual_tls_mode: str = None,
  namespace: str = None,
  partition: str = None,
  transparent_proxy: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsTransparentProxy]] = None,
  upstream_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.expose">expose</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]</code> | expose block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the service you are setting the defaults for. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.protocol">protocol</a></code> | <code>str</code> | Specifies the default protocol for the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.balanceInboundConnections">balance_inbound_connections</a></code> | <code>str</code> | Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]</code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.envoyExtensions">envoy_extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]</code> | envoy_extensions block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.externalSni">external_sni</a></code> | <code>str</code> | Specifies the TLS server name indication (SNI) when federating with an external system. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localConnectTimeoutMs">local_connect_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localRequestTimeoutMs">local_request_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the timeout for HTTP requests to the local application instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.maxInboundConnections">max_inbound_connections</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of concurrent inbound connections to each service instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meshGateway">mesh_gateway</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies a set of custom key-value pairs to add to the Consul KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mode">mode</a></code> | <code>str</code> | Specifies a mode for how the service directs inbound and outbound traffic. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mutualTlsMode">mutual_tls_mode</a></code> | <code>str</code> | Controls whether mutual TLS is required for incoming connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.namespace">namespace</a></code> | <code>str</code> | Specifies the Consul namespace that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.partition">partition</a></code> | <code>str</code> | Specifies the name of the name of the Consul admin partition that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.transparentProxy">transparent_proxy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]</code> | transparent_proxy block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.upstreamConfig">upstream_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]</code> | upstream_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expose`<sup>Required</sup> <a name="expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.expose"></a>

```python
expose: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExpose]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]

expose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#expose ConfigEntryServiceDefaults#expose}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the service you are setting the defaults for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

##### `balance_inbound_connections`<sup>Optional</sup> <a name="balance_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.balanceInboundConnections"></a>

```python
balance_inbound_connections: str
```

- *Type:* str

Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#balance_inbound_connections ConfigEntryServiceDefaults#balance_inbound_connections}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.destination"></a>

```python
destination: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#destination ConfigEntryServiceDefaults#destination}

---

##### `envoy_extensions`<sup>Optional</sup> <a name="envoy_extensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.envoyExtensions"></a>

```python
envoy_extensions: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsEnvoyExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]

envoy_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#envoy_extensions ConfigEntryServiceDefaults#envoy_extensions}

---

##### `external_sni`<sup>Optional</sup> <a name="external_sni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.externalSni"></a>

```python
external_sni: str
```

- *Type:* str

Specifies the TLS server name indication (SNI) when federating with an external system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#external_sni ConfigEntryServiceDefaults#external_sni}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_connect_timeout_ms`<sup>Optional</sup> <a name="local_connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localConnectTimeoutMs"></a>

```python
local_connect_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#local_connect_timeout_ms ConfigEntryServiceDefaults#local_connect_timeout_ms}

---

##### `local_request_timeout_ms`<sup>Optional</sup> <a name="local_request_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localRequestTimeoutMs"></a>

```python
local_request_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the timeout for HTTP requests to the local application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#local_request_timeout_ms ConfigEntryServiceDefaults#local_request_timeout_ms}

---

##### `max_inbound_connections`<sup>Optional</sup> <a name="max_inbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.maxInboundConnections"></a>

```python
max_inbound_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of concurrent inbound connections to each service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_inbound_connections ConfigEntryServiceDefaults#max_inbound_connections}

---

##### `mesh_gateway`<sup>Optional</sup> <a name="mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meshGateway"></a>

```python
mesh_gateway: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies a set of custom key-value pairs to add to the Consul KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#meta ConfigEntryServiceDefaults#meta}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Specifies a mode for how the service directs inbound and outbound traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}

---

##### `mutual_tls_mode`<sup>Optional</sup> <a name="mutual_tls_mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mutualTlsMode"></a>

```python
mutual_tls_mode: str
```

- *Type:* str

Controls whether mutual TLS is required for incoming connections to this service.

This setting is only supported for services with transparent proxy enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mutual_tls_mode ConfigEntryServiceDefaults#mutual_tls_mode}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the Consul namespace that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the name of the name of the Consul admin partition that the configuration entry applies to.

Refer to Admin Partitions for additional information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}

---

##### `transparent_proxy`<sup>Optional</sup> <a name="transparent_proxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.transparentProxy"></a>

```python
transparent_proxy: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsTransparentProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]

transparent_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#transparent_proxy ConfigEntryServiceDefaults#transparent_proxy}

---

##### `upstream_config`<sup>Optional</sup> <a name="upstream_config" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.upstreamConfig"></a>

```python
upstream_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]

upstream_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#upstream_config ConfigEntryServiceDefaults#upstream_config}

---

### ConfigEntryServiceDefaultsDestination <a name="ConfigEntryServiceDefaultsDestination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination(
  addresses: typing.List[str],
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#addresses ConfigEntryServiceDefaults#addresses}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#port ConfigEntryServiceDefaults#port}. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#addresses ConfigEntryServiceDefaults#addresses}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#port ConfigEntryServiceDefaults#port}.

---

### ConfigEntryServiceDefaultsEnvoyExtensions <a name="ConfigEntryServiceDefaultsEnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions(
  arguments: typing.Mapping[str] = None,
  consul_version: str = None,
  envoy_version: str = None,
  name: str = None,
  required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#arguments ConfigEntryServiceDefaults#arguments}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.consulVersion">consul_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#consul_version ConfigEntryServiceDefaults#consul_version}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.envoyVersion">envoy_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#envoy_version ConfigEntryServiceDefaults#envoy_version}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#required ConfigEntryServiceDefaults#required}. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#arguments ConfigEntryServiceDefaults#arguments}.

---

##### `consul_version`<sup>Optional</sup> <a name="consul_version" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.consulVersion"></a>

```python
consul_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#consul_version ConfigEntryServiceDefaults#consul_version}.

---

##### `envoy_version`<sup>Optional</sup> <a name="envoy_version" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.envoyVersion"></a>

```python
envoy_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#envoy_version ConfigEntryServiceDefaults#envoy_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#required ConfigEntryServiceDefaults#required}.

---

### ConfigEntryServiceDefaultsExpose <a name="ConfigEntryServiceDefaultsExpose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose(
  checks: typing.Union[bool, IResolvable] = None,
  paths: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExposePaths]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.checks">checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#checks ConfigEntryServiceDefaults#checks}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.paths">paths</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]]</code> | paths block. |

---

##### `checks`<sup>Optional</sup> <a name="checks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.checks"></a>

```python
checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#checks ConfigEntryServiceDefaults#checks}.

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.paths"></a>

```python
paths: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExposePaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]]

paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#paths ConfigEntryServiceDefaults#paths}

---

### ConfigEntryServiceDefaultsExposePaths <a name="ConfigEntryServiceDefaultsExposePaths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths(
  listener_port: typing.Union[int, float] = None,
  local_path_port: typing.Union[int, float] = None,
  path: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#listener_port ConfigEntryServiceDefaults#listener_port}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.localPathPort">local_path_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#local_path_port ConfigEntryServiceDefaults#local_path_port}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#path ConfigEntryServiceDefaults#path}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}. |

---

##### `listener_port`<sup>Optional</sup> <a name="listener_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#listener_port ConfigEntryServiceDefaults#listener_port}.

---

##### `local_path_port`<sup>Optional</sup> <a name="local_path_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.localPathPort"></a>

```python
local_path_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#local_path_port ConfigEntryServiceDefaults#local_path_port}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#path ConfigEntryServiceDefaults#path}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}.

---

### ConfigEntryServiceDefaultsMeshGateway <a name="ConfigEntryServiceDefaultsMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway(
  mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsTransparentProxy <a name="ConfigEntryServiceDefaultsTransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy(
  dialed_directly: typing.Union[bool, IResolvable],
  outbound_listener_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.dialedDirectly">dialed_directly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#dialed_directly ConfigEntryServiceDefaults#dialed_directly}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.outboundListenerPort">outbound_listener_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#outbound_listener_port ConfigEntryServiceDefaults#outbound_listener_port}. |

---

##### `dialed_directly`<sup>Required</sup> <a name="dialed_directly" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.dialedDirectly"></a>

```python
dialed_directly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#dialed_directly ConfigEntryServiceDefaults#dialed_directly}.

---

##### `outbound_listener_port`<sup>Required</sup> <a name="outbound_listener_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.outboundListenerPort"></a>

```python
outbound_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#outbound_listener_port ConfigEntryServiceDefaults#outbound_listener_port}.

---

### ConfigEntryServiceDefaultsUpstreamConfig <a name="ConfigEntryServiceDefaultsUpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig(
  defaults: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaults]] = None,
  overrides: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverrides]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.defaults">defaults</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]]</code> | defaults block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.overrides">overrides</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]]</code> | overrides block. |

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.defaults"></a>

```python
defaults: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaults]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]]

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#defaults ConfigEntryServiceDefaults#defaults}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.overrides"></a>

```python
overrides: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#overrides ConfigEntryServiceDefaults#overrides}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaults <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults(
  balance_outbound_connections: str = None,
  connect_timeout_ms: typing.Union[int, float] = None,
  limits: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits]] = None,
  mesh_gateway: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway]] = None,
  passive_health_check: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck]] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.balanceOutboundConnections">balance_outbound_connections</a></code> | <code>str</code> | Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.connectTimeoutMs">connect_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.limits">limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]]</code> | limits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.meshGateway">mesh_gateway</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]]</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.passiveHealthCheck">passive_health_check</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]]</code> | passive_health_check block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.protocol">protocol</a></code> | <code>str</code> | Specifies the default protocol for the service. |

---

##### `balance_outbound_connections`<sup>Optional</sup> <a name="balance_outbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.balanceOutboundConnections"></a>

```python
balance_outbound_connections: str
```

- *Type:* str

Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}

---

##### `connect_timeout_ms`<sup>Optional</sup> <a name="connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.connectTimeoutMs"></a>

```python
connect_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.limits"></a>

```python
limits: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]]

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}

---

##### `mesh_gateway`<sup>Optional</sup> <a name="mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.meshGateway"></a>

```python
mesh_gateway: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]]

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `passive_health_check`<sup>Optional</sup> <a name="passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.passiveHealthCheck"></a>

```python
passive_health_check: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]]

passive_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits(
  max_concurrent_requests: typing.Union[int, float] = None,
  max_connections: typing.Union[int, float] = None,
  max_pending_requests: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of concurrent requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of connections a service instance can establish against the upstream. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of requests that are queued while waiting for a connection to establish. |

---

##### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of connections a service instance can establish against the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}

---

##### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of requests that are queued while waiting for a connection to establish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck(
  base_ejection_time: str = None,
  enforcing_consecutive5_xx: typing.Union[int, float] = None,
  interval: str = None,
  max_ejection_percent: typing.Union[int, float] = None,
  max_failures: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.baseEjectionTime">base_ejection_time</a></code> | <code>str</code> | Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.enforcingConsecutive5Xx">enforcing_consecutive5_xx</a></code> | <code>typing.Union[int, float]</code> | Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.interval">interval</a></code> | <code>str</code> | Specifies the time between checks. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxFailures">max_failures</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive failures allowed per check interval. |

---

##### `base_ejection_time`<sup>Optional</sup> <a name="base_ejection_time" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.baseEjectionTime"></a>

```python
base_ejection_time: str
```

- *Type:* str

Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}

---

##### `enforcing_consecutive5_xx`<sup>Optional</sup> <a name="enforcing_consecutive5_xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.enforcingConsecutive5Xx"></a>

```python
enforcing_consecutive5_xx: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.interval"></a>

```python
interval: str
```

- *Type:* str

Specifies the time between checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}

---

##### `max_ejection_percent`<sup>Optional</sup> <a name="max_ejection_percent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}

---

##### `max_failures`<sup>Optional</sup> <a name="max_failures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxFailures"></a>

```python
max_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of consecutive failures allowed per check interval.

If exceeded, Consul removes the host from the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverrides <a name="ConfigEntryServiceDefaultsUpstreamConfigOverrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides(
  balance_outbound_connections: str = None,
  connect_timeout_ms: typing.Union[int, float] = None,
  envoy_listener_json: str = None,
  limits: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits]] = None,
  mesh_gateway: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway]] = None,
  name: str = None,
  namespace: str = None,
  partition: str = None,
  passive_health_check: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck]] = None,
  peer: str = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.balanceOutboundConnections">balance_outbound_connections</a></code> | <code>str</code> | Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.connectTimeoutMs">connect_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.envoyListenerJson">envoy_listener_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#envoy_listener_json ConfigEntryServiceDefaults#envoy_listener_json}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.limits">limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]]</code> | limits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.meshGateway">mesh_gateway</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]]</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.name">name</a></code> | <code>str</code> | Specifies the name of the service you are setting the defaults for. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace containing the upstream service that the configuration applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.partition">partition</a></code> | <code>str</code> | Specifies the name of the name of the Consul admin partition that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.passiveHealthCheck">passive_health_check</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]]</code> | passive_health_check block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.peer">peer</a></code> | <code>str</code> | Specifies the peer name of the upstream service that the configuration applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.protocol">protocol</a></code> | <code>str</code> | Specifies the default protocol for the service. |

---

##### `balance_outbound_connections`<sup>Optional</sup> <a name="balance_outbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.balanceOutboundConnections"></a>

```python
balance_outbound_connections: str
```

- *Type:* str

Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}

---

##### `connect_timeout_ms`<sup>Optional</sup> <a name="connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.connectTimeoutMs"></a>

```python
connect_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}.

---

##### `envoy_listener_json`<sup>Optional</sup> <a name="envoy_listener_json" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.envoyListenerJson"></a>

```python
envoy_listener_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#envoy_listener_json ConfigEntryServiceDefaults#envoy_listener_json}.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.limits"></a>

```python
limits: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]]

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}

---

##### `mesh_gateway`<sup>Optional</sup> <a name="mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.meshGateway"></a>

```python
mesh_gateway: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]]

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the service you are setting the defaults for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace containing the upstream service that the configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the name of the name of the Consul admin partition that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}

---

##### `passive_health_check`<sup>Optional</sup> <a name="passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.passiveHealthCheck"></a>

```python
passive_health_check: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]]

passive_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.peer"></a>

```python
peer: str
```

- *Type:* str

Specifies the peer name of the upstream service that the configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#peer ConfigEntryServiceDefaults#peer}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits(
  max_concurrent_requests: typing.Union[int, float] = None,
  max_connections: typing.Union[int, float] = None,
  max_pending_requests: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of concurrent requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of connections a service instance can establish against the upstream. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of requests that are queued while waiting for a connection to establish. |

---

##### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of connections a service instance can establish against the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}

---

##### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of requests that are queued while waiting for a connection to establish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck(
  base_ejection_time: str = None,
  enforcing_consecutive5_xx: typing.Union[int, float] = None,
  interval: str = None,
  max_ejection_percent: typing.Union[int, float] = None,
  max_failures: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.baseEjectionTime">base_ejection_time</a></code> | <code>str</code> | Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.enforcingConsecutive5Xx">enforcing_consecutive5_xx</a></code> | <code>typing.Union[int, float]</code> | Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.interval">interval</a></code> | <code>str</code> | Specifies the time between checks. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxFailures">max_failures</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive failures allowed per check interval. |

---

##### `base_ejection_time`<sup>Optional</sup> <a name="base_ejection_time" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.baseEjectionTime"></a>

```python
base_ejection_time: str
```

- *Type:* str

Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}

---

##### `enforcing_consecutive5_xx`<sup>Optional</sup> <a name="enforcing_consecutive5_xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.enforcingConsecutive5Xx"></a>

```python
enforcing_consecutive5_xx: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.interval"></a>

```python
interval: str
```

- *Type:* str

Specifies the time between checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}

---

##### `max_ejection_percent`<sup>Optional</sup> <a name="max_ejection_percent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}

---

##### `max_failures`<sup>Optional</sup> <a name="max_failures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxFailures"></a>

```python
max_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of consecutive failures allowed per check interval.

If exceeded, Consul removes the host from the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceDefaultsDestinationList <a name="ConfigEntryServiceDefaultsDestinationList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]]

---


### ConfigEntryServiceDefaultsDestinationOutputReference <a name="ConfigEntryServiceDefaultsDestinationOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addressesInput">addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addressesInput"></a>

```python
addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>]

---


### ConfigEntryServiceDefaultsEnvoyExtensionsList <a name="ConfigEntryServiceDefaultsEnvoyExtensionsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsEnvoyExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]]

---


### ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference <a name="ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetConsulVersion">reset_consul_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetEnvoyVersion">reset_envoy_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_consul_version` <a name="reset_consul_version" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetConsulVersion"></a>

```python
def reset_consul_version() -> None
```

##### `reset_envoy_version` <a name="reset_envoy_version" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetEnvoyVersion"></a>

```python
def reset_envoy_version() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.argumentsInput">arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersionInput">consul_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersionInput">envoy_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersion">consul_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersion">envoy_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.argumentsInput"></a>

```python
arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `consul_version_input`<sup>Optional</sup> <a name="consul_version_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersionInput"></a>

```python
consul_version_input: str
```

- *Type:* str

---

##### `envoy_version_input`<sup>Optional</sup> <a name="envoy_version_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersionInput"></a>

```python
envoy_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `consul_version`<sup>Required</sup> <a name="consul_version" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersion"></a>

```python
consul_version: str
```

- *Type:* str

---

##### `envoy_version`<sup>Required</sup> <a name="envoy_version" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersion"></a>

```python
envoy_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsEnvoyExtensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>]

---


### ConfigEntryServiceDefaultsExposeList <a name="ConfigEntryServiceDefaultsExposeList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsExposeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExpose]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]]

---


### ConfigEntryServiceDefaultsExposeOutputReference <a name="ConfigEntryServiceDefaultsExposeOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths">put_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetChecks">reset_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetPaths">reset_paths</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_paths` <a name="put_paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths"></a>

```python
def put_paths(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExposePaths]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]]

---

##### `reset_checks` <a name="reset_checks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetChecks"></a>

```python
def reset_checks() -> None
```

##### `reset_paths` <a name="reset_paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetPaths"></a>

```python
def reset_paths() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.paths">paths</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList">ConfigEntryServiceDefaultsExposePathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checksInput">checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checks">checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.paths"></a>

```python
paths: ConfigEntryServiceDefaultsExposePathsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList">ConfigEntryServiceDefaultsExposePathsList</a>

---

##### `checks_input`<sup>Optional</sup> <a name="checks_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checksInput"></a>

```python
checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.pathsInput"></a>

```python
paths_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExposePaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]]

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checks"></a>

```python
checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsExpose]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>]

---


### ConfigEntryServiceDefaultsExposePathsList <a name="ConfigEntryServiceDefaultsExposePathsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsExposePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsExposePaths]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]]

---


### ConfigEntryServiceDefaultsExposePathsOutputReference <a name="ConfigEntryServiceDefaultsExposePathsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetListenerPort">reset_listener_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetLocalPathPort">reset_local_path_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_listener_port` <a name="reset_listener_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetListenerPort"></a>

```python
def reset_listener_port() -> None
```

##### `reset_local_path_port` <a name="reset_local_path_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetLocalPathPort"></a>

```python
def reset_local_path_port() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPortInput">listener_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPortInput">local_path_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPort">local_path_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `listener_port_input`<sup>Optional</sup> <a name="listener_port_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPortInput"></a>

```python
listener_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_path_port_input`<sup>Optional</sup> <a name="local_path_port_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPortInput"></a>

```python
local_path_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_path_port`<sup>Required</sup> <a name="local_path_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPort"></a>

```python
local_path_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsExposePaths]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>]

---


### ConfigEntryServiceDefaultsMeshGatewayList <a name="ConfigEntryServiceDefaultsMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsMeshGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]]

---


### ConfigEntryServiceDefaultsMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsMeshGateway]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>]

---


### ConfigEntryServiceDefaultsTransparentProxyList <a name="ConfigEntryServiceDefaultsTransparentProxyList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsTransparentProxyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsTransparentProxy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]]

---


### ConfigEntryServiceDefaultsTransparentProxyOutputReference <a name="ConfigEntryServiceDefaultsTransparentProxyOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectlyInput">dialed_directly_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPortInput">outbound_listener_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectly">dialed_directly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPort">outbound_listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dialed_directly_input`<sup>Optional</sup> <a name="dialed_directly_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectlyInput"></a>

```python
dialed_directly_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `outbound_listener_port_input`<sup>Optional</sup> <a name="outbound_listener_port_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPortInput"></a>

```python
outbound_listener_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dialed_directly`<sup>Required</sup> <a name="dialed_directly" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectly"></a>

```python
dialed_directly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `outbound_listener_port`<sup>Required</sup> <a name="outbound_listener_port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPort"></a>

```python
outbound_listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsTransparentProxy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConcurrentRequests">reset_max_concurrent_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxPendingRequests">reset_max_pending_requests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_concurrent_requests` <a name="reset_max_concurrent_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConcurrentRequests"></a>

```python
def reset_max_concurrent_requests() -> None
```

##### `reset_max_connections` <a name="reset_max_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_max_pending_requests` <a name="reset_max_pending_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxPendingRequests"></a>

```python
def reset_max_pending_requests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequestsInput">max_concurrent_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequestsInput">max_pending_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrent_requests_input`<sup>Optional</sup> <a name="max_concurrent_requests_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequestsInput"></a>

```python
max_concurrent_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests_input`<sup>Optional</sup> <a name="max_pending_requests_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequestsInput"></a>

```python
max_pending_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_requests`<sup>Required</sup> <a name="max_concurrent_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests`<sup>Required</sup> <a name="max_pending_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaults]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway">put_mesh_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck">put_passive_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetBalanceOutboundConnections">reset_balance_outbound_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetConnectTimeoutMs">reset_connect_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetMeshGateway">reset_mesh_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetPassiveHealthCheck">reset_passive_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_limits` <a name="put_limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits"></a>

```python
def put_limits(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]]

---

##### `put_mesh_gateway` <a name="put_mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway"></a>

```python
def put_mesh_gateway(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]]

---

##### `put_passive_health_check` <a name="put_passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck"></a>

```python
def put_passive_health_check(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]]

---

##### `reset_balance_outbound_connections` <a name="reset_balance_outbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetBalanceOutboundConnections"></a>

```python
def reset_balance_outbound_connections() -> None
```

##### `reset_connect_timeout_ms` <a name="reset_connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetConnectTimeoutMs"></a>

```python
def reset_connect_timeout_ms() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_mesh_gateway` <a name="reset_mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetMeshGateway"></a>

```python
def reset_mesh_gateway() -> None
```

##### `reset_passive_health_check` <a name="reset_passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetPassiveHealthCheck"></a>

```python
def reset_passive_health_check() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGateway">mesh_gateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheck">passive_health_check</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnectionsInput">balance_outbound_connections_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMsInput">connect_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGatewayInput">mesh_gateway_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheckInput">passive_health_check_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnections">balance_outbound_connections</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMs">connect_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limits"></a>

```python
limits: ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList</a>

---

##### `mesh_gateway`<sup>Required</sup> <a name="mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGateway"></a>

```python
mesh_gateway: ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList</a>

---

##### `passive_health_check`<sup>Required</sup> <a name="passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheck"></a>

```python
passive_health_check: ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList</a>

---

##### `balance_outbound_connections_input`<sup>Optional</sup> <a name="balance_outbound_connections_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnectionsInput"></a>

```python
balance_outbound_connections_input: str
```

- *Type:* str

---

##### `connect_timeout_ms_input`<sup>Optional</sup> <a name="connect_timeout_ms_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMsInput"></a>

```python
connect_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>]]

---

##### `mesh_gateway_input`<sup>Optional</sup> <a name="mesh_gateway_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGatewayInput"></a>

```python
mesh_gateway_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>]]

---

##### `passive_health_check_input`<sup>Optional</sup> <a name="passive_health_check_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheckInput"></a>

```python
passive_health_check_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `balance_outbound_connections`<sup>Required</sup> <a name="balance_outbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnections"></a>

```python
balance_outbound_connections: str
```

- *Type:* str

---

##### `connect_timeout_ms`<sup>Required</sup> <a name="connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMs"></a>

```python
connect_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigDefaults]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetBaseEjectionTime">reset_base_ejection_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx">reset_enforcing_consecutive5_xx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxEjectionPercent">reset_max_ejection_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxFailures">reset_max_failures</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_ejection_time` <a name="reset_base_ejection_time" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetBaseEjectionTime"></a>

```python
def reset_base_ejection_time() -> None
```

##### `reset_enforcing_consecutive5_xx` <a name="reset_enforcing_consecutive5_xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx"></a>

```python
def reset_enforcing_consecutive5_xx() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_max_ejection_percent` <a name="reset_max_ejection_percent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxEjectionPercent"></a>

```python
def reset_max_ejection_percent() -> None
```

##### `reset_max_failures` <a name="reset_max_failures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxFailures"></a>

```python
def reset_max_failures() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTimeInput">base_ejection_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput">enforcing_consecutive5_xx_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercentInput">max_ejection_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailuresInput">max_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTime">base_ejection_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx">enforcing_consecutive5_xx</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailures">max_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_ejection_time_input`<sup>Optional</sup> <a name="base_ejection_time_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTimeInput"></a>

```python
base_ejection_time_input: str
```

- *Type:* str

---

##### `enforcing_consecutive5_xx_input`<sup>Optional</sup> <a name="enforcing_consecutive5_xx_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput"></a>

```python
enforcing_consecutive5_xx_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `max_ejection_percent_input`<sup>Optional</sup> <a name="max_ejection_percent_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercentInput"></a>

```python
max_ejection_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_input`<sup>Optional</sup> <a name="max_failures_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailuresInput"></a>

```python
max_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_ejection_time`<sup>Required</sup> <a name="base_ejection_time" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTime"></a>

```python
base_ejection_time: str
```

- *Type:* str

---

##### `enforcing_consecutive5_xx`<sup>Required</sup> <a name="enforcing_consecutive5_xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx"></a>

```python
enforcing_consecutive5_xx: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `max_ejection_percent`<sup>Required</sup> <a name="max_ejection_percent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures`<sup>Required</sup> <a name="max_failures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailures"></a>

```python
max_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigList <a name="ConfigEntryServiceDefaultsUpstreamConfigList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults">put_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetDefaults">reset_defaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_defaults` <a name="put_defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults"></a>

```python
def put_defaults(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaults]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]]

---

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides"></a>

```python
def put_overrides(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverrides]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]]

---

##### `reset_defaults` <a name="reset_defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetDefaults"></a>

```python
def reset_defaults() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList">ConfigEntryServiceDefaultsUpstreamConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaultsInput">defaults_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overridesInput">overrides_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaults"></a>

```python
defaults: ConfigEntryServiceDefaultsUpstreamConfigDefaultsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsList</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overrides"></a>

```python
overrides: ConfigEntryServiceDefaultsUpstreamConfigOverridesList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList">ConfigEntryServiceDefaultsUpstreamConfigOverridesList</a>

---

##### `defaults_input`<sup>Optional</sup> <a name="defaults_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaultsInput"></a>

```python
defaults_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigDefaults]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>]]

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overridesInput"></a>

```python
overrides_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConcurrentRequests">reset_max_concurrent_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxPendingRequests">reset_max_pending_requests</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_concurrent_requests` <a name="reset_max_concurrent_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConcurrentRequests"></a>

```python
def reset_max_concurrent_requests() -> None
```

##### `reset_max_connections` <a name="reset_max_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_max_pending_requests` <a name="reset_max_pending_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxPendingRequests"></a>

```python
def reset_max_pending_requests() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequestsInput">max_concurrent_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequestsInput">max_pending_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrent_requests_input`<sup>Optional</sup> <a name="max_concurrent_requests_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequestsInput"></a>

```python
max_concurrent_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests_input`<sup>Optional</sup> <a name="max_pending_requests_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequestsInput"></a>

```python
max_pending_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_requests`<sup>Required</sup> <a name="max_concurrent_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests`<sup>Required</sup> <a name="max_pending_requests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverrides]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway">put_mesh_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck">put_passive_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetBalanceOutboundConnections">reset_balance_outbound_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetConnectTimeoutMs">reset_connect_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetEnvoyListenerJson">reset_envoy_listener_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetLimits">reset_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetMeshGateway">reset_mesh_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPassiveHealthCheck">reset_passive_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPeer">reset_peer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_limits` <a name="put_limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits"></a>

```python
def put_limits(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]]

---

##### `put_mesh_gateway` <a name="put_mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway"></a>

```python
def put_mesh_gateway(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]]

---

##### `put_passive_health_check` <a name="put_passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck"></a>

```python
def put_passive_health_check(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]]

---

##### `reset_balance_outbound_connections` <a name="reset_balance_outbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetBalanceOutboundConnections"></a>

```python
def reset_balance_outbound_connections() -> None
```

##### `reset_connect_timeout_ms` <a name="reset_connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetConnectTimeoutMs"></a>

```python
def reset_connect_timeout_ms() -> None
```

##### `reset_envoy_listener_json` <a name="reset_envoy_listener_json" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetEnvoyListenerJson"></a>

```python
def reset_envoy_listener_json() -> None
```

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```

##### `reset_mesh_gateway` <a name="reset_mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetMeshGateway"></a>

```python
def reset_mesh_gateway() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_passive_health_check` <a name="reset_passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPassiveHealthCheck"></a>

```python
def reset_passive_health_check() -> None
```

##### `reset_peer` <a name="reset_peer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPeer"></a>

```python
def reset_peer() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGateway">mesh_gateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheck">passive_health_check</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnectionsInput">balance_outbound_connections_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMsInput">connect_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJsonInput">envoy_listener_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGatewayInput">mesh_gateway_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheckInput">passive_health_check_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peerInput">peer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnections">balance_outbound_connections</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMs">connect_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJson">envoy_listener_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peer">peer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limits"></a>

```python
limits: ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList</a>

---

##### `mesh_gateway`<sup>Required</sup> <a name="mesh_gateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGateway"></a>

```python
mesh_gateway: ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList</a>

---

##### `passive_health_check`<sup>Required</sup> <a name="passive_health_check" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheck"></a>

```python
passive_health_check: ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList</a>

---

##### `balance_outbound_connections_input`<sup>Optional</sup> <a name="balance_outbound_connections_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnectionsInput"></a>

```python
balance_outbound_connections_input: str
```

- *Type:* str

---

##### `connect_timeout_ms_input`<sup>Optional</sup> <a name="connect_timeout_ms_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMsInput"></a>

```python
connect_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `envoy_listener_json_input`<sup>Optional</sup> <a name="envoy_listener_json_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJsonInput"></a>

```python
envoy_listener_json_input: str
```

- *Type:* str

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>]]

---

##### `mesh_gateway_input`<sup>Optional</sup> <a name="mesh_gateway_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGatewayInput"></a>

```python
mesh_gateway_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `passive_health_check_input`<sup>Optional</sup> <a name="passive_health_check_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheckInput"></a>

```python
passive_health_check_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]]

---

##### `peer_input`<sup>Optional</sup> <a name="peer_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peerInput"></a>

```python
peer_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `balance_outbound_connections`<sup>Required</sup> <a name="balance_outbound_connections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnections"></a>

```python
balance_outbound_connections: str
```

- *Type:* str

---

##### `connect_timeout_ms`<sup>Required</sup> <a name="connect_timeout_ms" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMs"></a>

```python
connect_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `envoy_listener_json`<sup>Required</sup> <a name="envoy_listener_json" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJson"></a>

```python
envoy_listener_json: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peer"></a>

```python
peer: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigOverrides]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_defaults

configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetBaseEjectionTime">reset_base_ejection_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx">reset_enforcing_consecutive5_xx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxEjectionPercent">reset_max_ejection_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxFailures">reset_max_failures</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_ejection_time` <a name="reset_base_ejection_time" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetBaseEjectionTime"></a>

```python
def reset_base_ejection_time() -> None
```

##### `reset_enforcing_consecutive5_xx` <a name="reset_enforcing_consecutive5_xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx"></a>

```python
def reset_enforcing_consecutive5_xx() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_max_ejection_percent` <a name="reset_max_ejection_percent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxEjectionPercent"></a>

```python
def reset_max_ejection_percent() -> None
```

##### `reset_max_failures` <a name="reset_max_failures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxFailures"></a>

```python
def reset_max_failures() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTimeInput">base_ejection_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput">enforcing_consecutive5_xx_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercentInput">max_ejection_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailuresInput">max_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTime">base_ejection_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx">enforcing_consecutive5_xx</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.interval">interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailures">max_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_ejection_time_input`<sup>Optional</sup> <a name="base_ejection_time_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTimeInput"></a>

```python
base_ejection_time_input: str
```

- *Type:* str

---

##### `enforcing_consecutive5_xx_input`<sup>Optional</sup> <a name="enforcing_consecutive5_xx_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput"></a>

```python
enforcing_consecutive5_xx_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: str
```

- *Type:* str

---

##### `max_ejection_percent_input`<sup>Optional</sup> <a name="max_ejection_percent_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercentInput"></a>

```python
max_ejection_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures_input`<sup>Optional</sup> <a name="max_failures_input" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailuresInput"></a>

```python
max_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_ejection_time`<sup>Required</sup> <a name="base_ejection_time" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTime"></a>

```python
base_ejection_time: str
```

- *Type:* str

---

##### `enforcing_consecutive5_xx`<sup>Required</sup> <a name="enforcing_consecutive5_xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx"></a>

```python
enforcing_consecutive5_xx: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.interval"></a>

```python
interval: str
```

- *Type:* str

---

##### `max_ejection_percent`<sup>Required</sup> <a name="max_ejection_percent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_failures`<sup>Required</sup> <a name="max_failures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailures"></a>

```python
max_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>]

---



