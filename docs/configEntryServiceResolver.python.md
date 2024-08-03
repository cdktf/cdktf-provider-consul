# `configEntryServiceResolver` Submodule <a name="`configEntryServiceResolver` Submodule" id="@cdktf/provider-consul.configEntryServiceResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceResolver <a name="ConfigEntryServiceResolver" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver consul_config_entry_service_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolver(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connect_timeout: str = None,
  default_subset: str = None,
  failover: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailover]] = None,
  id: str = None,
  load_balancer: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancer]] = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None,
  redirect: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverRedirect]] = None,
  request_timeout: str = None,
  subsets: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverSubsets]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connectTimeout">connect_timeout</a></code> | <code>str</code> | Specifies the timeout duration for establishing new network connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.defaultSubset">default_subset</a></code> | <code>str</code> | Specifies a defined subset of service instances to use when no explicit subset is requested. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.failover">failover</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]</code> | failover block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.partition">partition</a></code> | <code>str</code> | Specifies the admin partition that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.redirect">redirect</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]</code> | redirect block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.requestTimeout">request_timeout</a></code> | <code>str</code> | Specifies the timeout duration for receiving an HTTP response from this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.subsets">subsets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]</code> | subsets block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.name"></a>

- *Type:* str

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connectTimeout"></a>

- *Type:* str

Specifies the timeout duration for establishing new network connections to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}

---

##### `default_subset`<sup>Optional</sup> <a name="default_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.defaultSubset"></a>

- *Type:* str

Specifies a defined subset of service instances to use when no explicit subset is requested.

If this parameter is not specified, Consul uses the unnamed default subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.failover"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.loadBalancer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.meta"></a>

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.namespace"></a>

- *Type:* str

Specifies the namespace that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.partition"></a>

- *Type:* str

Specifies the admin partition that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.redirect"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.requestTimeout"></a>

- *Type:* str

Specifies the timeout duration for receiving an HTTP response from this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}

---

##### `subsets`<sup>Optional</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.subsets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]

subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover">put_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer">put_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect">put_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets">put_subsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset">reset_default_subset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover">reset_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer">reset_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect">reset_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets">reset_subsets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_failover` <a name="put_failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover"></a>

```python
def put_failover(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailover]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]

---

##### `put_load_balancer` <a name="put_load_balancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer"></a>

```python
def put_load_balancer(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]

---

##### `put_redirect` <a name="put_redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect"></a>

```python
def put_redirect(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverRedirect]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]

---

##### `put_subsets` <a name="put_subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets"></a>

```python
def put_subsets(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverSubsets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]

---

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_default_subset` <a name="reset_default_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset"></a>

```python
def reset_default_subset() -> None
```

##### `reset_failover` <a name="reset_failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover"></a>

```python
def reset_failover() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancer` <a name="reset_load_balancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer"></a>

```python
def reset_load_balancer() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_redirect` <a name="reset_redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect"></a>

```python
def reset_redirect() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_subsets` <a name="reset_subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets"></a>

```python
def reset_subsets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolver.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolver.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolver.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolver.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigEntryServiceResolver to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigEntryServiceResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer">load_balancer</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets">subsets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput">default_subset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput">failover_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput">load_balancer_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput">meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput">redirect_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput">request_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput">subsets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset">default_subset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout">request_timeout</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover"></a>

```python
failover: ConfigEntryServiceResolverFailoverList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a>

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer"></a>

```python
load_balancer: ConfigEntryServiceResolverLoadBalancerList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect"></a>

```python
redirect: ConfigEntryServiceResolverRedirectList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a>

---

##### `subsets`<sup>Required</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets"></a>

```python
subsets: ConfigEntryServiceResolverSubsetsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a>

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput"></a>

```python
connect_timeout_input: str
```

- *Type:* str

---

##### `default_subset_input`<sup>Optional</sup> <a name="default_subset_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput"></a>

```python
default_subset_input: str
```

- *Type:* str

---

##### `failover_input`<sup>Optional</sup> <a name="failover_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput"></a>

```python
failover_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput"></a>

```python
load_balancer_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput"></a>

```python
meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `redirect_input`<sup>Optional</sup> <a name="redirect_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput"></a>

```python
redirect_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverRedirect]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput"></a>

```python
request_timeout_input: str
```

- *Type:* str

---

##### `subsets_input`<sup>Optional</sup> <a name="subsets_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput"></a>

```python
subsets_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverSubsets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

---

##### `default_subset`<sup>Required</sup> <a name="default_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset"></a>

```python
default_subset: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `request_timeout`<sup>Required</sup> <a name="request_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceResolverConfig <a name="ConfigEntryServiceResolverConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  connect_timeout: str = None,
  default_subset: str = None,
  failover: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailover]] = None,
  id: str = None,
  load_balancer: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancer]] = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None,
  redirect: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverRedirect]] = None,
  request_timeout: str = None,
  subsets: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverSubsets]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name">name</a></code> | <code>str</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout">connect_timeout</a></code> | <code>str</code> | Specifies the timeout duration for establishing new network connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset">default_subset</a></code> | <code>str</code> | Specifies a defined subset of service instances to use when no explicit subset is requested. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover">failover</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]</code> | failover block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer">load_balancer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition">partition</a></code> | <code>str</code> | Specifies the admin partition that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect">redirect</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]</code> | redirect block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout">request_timeout</a></code> | <code>str</code> | Specifies the timeout duration for receiving an HTTP response from this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets">subsets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]</code> | subsets block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout"></a>

```python
connect_timeout: str
```

- *Type:* str

Specifies the timeout duration for establishing new network connections to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}

---

##### `default_subset`<sup>Optional</sup> <a name="default_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset"></a>

```python
default_subset: str
```

- *Type:* str

Specifies a defined subset of service instances to use when no explicit subset is requested.

If this parameter is not specified, Consul uses the unnamed default subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover"></a>

```python
failover: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer`<sup>Optional</sup> <a name="load_balancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer"></a>

```python
load_balancer: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the admin partition that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect"></a>

```python
redirect: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverRedirect]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

Specifies the timeout duration for receiving an HTTP response from this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}

---

##### `subsets`<sup>Optional</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets"></a>

```python
subsets: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverSubsets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]

subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}

---

### ConfigEntryServiceResolverFailover <a name="ConfigEntryServiceResolverFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverFailover(
  subset_name: str,
  datacenters: typing.List[str] = None,
  namespace: str = None,
  sameness_group: str = None,
  service: str = None,
  service_subset: str = None,
  targets: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailoverTargets]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName">subset_name</a></code> | <code>str</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters">datacenters</a></code> | <code>typing.List[str]</code> | Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup">sameness_group</a></code> | <code>str</code> | Specifies the sameness group at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service">service</a></code> | <code>str</code> | Specifies the name of the service to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset">service_subset</a></code> | <code>str</code> | Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets">targets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]]</code> | targets block. |

---

##### `subset_name`<sup>Required</sup> <a name="subset_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName"></a>

```python
subset_name: str
```

- *Type:* str

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#subset_name ConfigEntryServiceResolver#subset_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters"></a>

```python
datacenters: typing.List[str]
```

- *Type:* typing.List[str]

Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario.

When Consul cannot establish a connection with the first datacenter in the list, it proceeds sequentially until establishing a connection with another datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenters ConfigEntryServiceResolver#datacenters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `sameness_group`<sup>Optional</sup> <a name="sameness_group" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup"></a>

```python
sameness_group: str
```

- *Type:* str

Specifies the sameness group at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service"></a>

```python
service: str
```

- *Type:* str

Specifies the name of the service to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `service_subset`<sup>Optional</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets"></a>

```python
targets: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailoverTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#targets ConfigEntryServiceResolver#targets}

---

### ConfigEntryServiceResolverFailoverTargets <a name="ConfigEntryServiceResolverFailoverTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets(
  datacenter: str = None,
  namespace: str = None,
  partition: str = None,
  peer: str = None,
  service: str = None,
  service_subset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter">datacenter</a></code> | <code>str</code> | Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to use for the failover target. If empty, the default namespace is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition">partition</a></code> | <code>str</code> | Specifies the admin partition within the same datacenter to use for the failover target. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer">peer</a></code> | <code>str</code> | Specifies the destination cluster peer to resolve the target service name from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service">service</a></code> | <code>str</code> | Specifies the service name to use for the failover target. If empty, the current service name is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset">service_subset</a></code> | <code>str</code> | Specifies the named subset to use for the failover target. |

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace to use for the failover target. If empty, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the admin partition within the same datacenter to use for the failover target.

If empty, the default partition is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer"></a>

```python
peer: str
```

- *Type:* str

Specifies the destination cluster peer to resolve the target service name from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service"></a>

```python
service: str
```

- *Type:* str

Specifies the service name to use for the failover target. If empty, the current service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `service_subset`<sup>Optional</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

Specifies the named subset to use for the failover target.

If empty, the default subset for the requested service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverLoadBalancer <a name="ConfigEntryServiceResolverLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer(
  hash_policies: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPolicies]] = None,
  least_request_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerLeastRequestConfig]] = None,
  policy: str = None,
  ring_hash_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerRingHashConfig]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies">hash_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]]</code> | hash_policies block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig">least_request_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]]</code> | least_request_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy">policy</a></code> | <code>str</code> | Specifies the type of load balancing policy for selecting a host. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig">ring_hash_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]]</code> | ring_hash_config block. |

---

##### `hash_policies`<sup>Optional</sup> <a name="hash_policies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies"></a>

```python
hash_policies: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]]

hash_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#hash_policies ConfigEntryServiceResolver#hash_policies}

---

##### `least_request_config`<sup>Optional</sup> <a name="least_request_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig"></a>

```python
least_request_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerLeastRequestConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]]

least_request_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#least_request_config ConfigEntryServiceResolver#least_request_config}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy"></a>

```python
policy: str
```

- *Type:* str

Specifies the type of load balancing policy for selecting a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#policy ConfigEntryServiceResolver#policy}

---

##### `ring_hash_config`<sup>Optional</sup> <a name="ring_hash_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig"></a>

```python
ring_hash_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerRingHashConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]]

ring_hash_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#ring_hash_config ConfigEntryServiceResolver#ring_hash_config}

---

### ConfigEntryServiceResolverLoadBalancerHashPolicies <a name="ConfigEntryServiceResolverLoadBalancerHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies(
  cookie_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig]] = None,
  field: str = None,
  field_value: str = None,
  source_ip: typing.Union[bool, IResolvable] = None,
  terminal: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig">cookie_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]]</code> | cookie_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field">field</a></code> | <code>str</code> | Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue">field_value</a></code> | <code>str</code> | Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp">source_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if the hash type should be source IP address. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal">terminal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if Consul should stop computing the hash when multiple hash policies are present. |

---

##### `cookie_config`<sup>Optional</sup> <a name="cookie_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig"></a>

```python
cookie_config: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]]

cookie_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#cookie_config ConfigEntryServiceResolver#cookie_config}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field"></a>

```python
field: str
```

- *Type:* str

Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#field ConfigEntryServiceResolver#field}

---

##### `field_value`<sup>Optional</sup> <a name="field_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue"></a>

```python
field_value: str
```

- *Type:* str

Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#field_value ConfigEntryServiceResolver#field_value}

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp"></a>

```python
source_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if the hash type should be source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#source_ip ConfigEntryServiceResolver#source_ip}

---

##### `terminal`<sup>Optional</sup> <a name="terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal"></a>

```python
terminal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if Consul should stop computing the hash when multiple hash policies are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#terminal ConfigEntryServiceResolver#terminal}

---

### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig(
  path: str = None,
  session: typing.Union[bool, IResolvable] = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path">path</a></code> | <code>str</code> | Specifies the path to set for the cookie. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session">session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Directs Consul to generate a session cookie with no expiration. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl">ttl</a></code> | <code>str</code> | Specifies the TTL for generated cookies. Cannot be specified for session cookies. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Specifies the path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#path ConfigEntryServiceResolver#path}

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session"></a>

```python
session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Directs Consul to generate a session cookie with no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#session ConfigEntryServiceResolver#session}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Specifies the TTL for generated cookies. Cannot be specified for session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#ttl ConfigEntryServiceResolver#ttl}

---

### ConfigEntryServiceResolverLoadBalancerLeastRequestConfig <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig(
  choice_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount">choice_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}. |

---

##### `choice_count`<sup>Optional</sup> <a name="choice_count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount"></a>

```python
choice_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}.

---

### ConfigEntryServiceResolverLoadBalancerRingHashConfig <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig(
  maximum_ring_size: typing.Union[int, float] = None,
  minimum_ring_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize">maximum_ring_size</a></code> | <code>typing.Union[int, float]</code> | Determines the maximum number of entries in the hash ring. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize">minimum_ring_size</a></code> | <code>typing.Union[int, float]</code> | Determines the minimum number of entries in the hash ring. |

---

##### `maximum_ring_size`<sup>Optional</sup> <a name="maximum_ring_size" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize"></a>

```python
maximum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determines the maximum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#maximum_ring_size ConfigEntryServiceResolver#maximum_ring_size}

---

##### `minimum_ring_size`<sup>Optional</sup> <a name="minimum_ring_size" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize"></a>

```python
minimum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determines the minimum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#minimum_ring_size ConfigEntryServiceResolver#minimum_ring_size}

---

### ConfigEntryServiceResolverRedirect <a name="ConfigEntryServiceResolverRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverRedirect(
  datacenter: str = None,
  namespace: str = None,
  partition: str = None,
  peer: str = None,
  sameness_group: str = None,
  service: str = None,
  service_subset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter">datacenter</a></code> | <code>str</code> | Specifies the datacenter at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition">partition</a></code> | <code>str</code> | Specifies the admin partition at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer">peer</a></code> | <code>str</code> | Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup">sameness_group</a></code> | <code>str</code> | Specifies the sameness group at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service">service</a></code> | <code>str</code> | Specifies the name of a service at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset">service_subset</a></code> | <code>str</code> | Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests. |

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Specifies the datacenter at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the admin partition at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer"></a>

```python
peer: str
```

- *Type:* str

Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `sameness_group`<sup>Optional</sup> <a name="sameness_group" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup"></a>

```python
sameness_group: str
```

- *Type:* str

Specifies the sameness group at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service"></a>

```python
service: str
```

- *Type:* str

Specifies the name of a service at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `service_subset`<sup>Optional</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests.

If empty, the default subset is used. If specified, you must also specify at least one of the following in the same Redirect map: Service, Namespace, andDatacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverSubsets <a name="ConfigEntryServiceResolverSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverSubsets(
  filter: str,
  name: str,
  only_passing: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter">filter</a></code> | <code>str</code> | Specifies an expression that filters the DNS elements of service instances that belong to the subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name">name</a></code> | <code>str</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing">only_passing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines if instances that return a warning from a health check are allowed to resolve a request. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter"></a>

```python
filter: str
```

- *Type:* str

Specifies an expression that filters the DNS elements of service instances that belong to the subset.

If empty, all healthy instances of a service are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#filter ConfigEntryServiceResolver#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name"></a>

```python
name: str
```

- *Type:* str

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `only_passing`<sup>Required</sup> <a name="only_passing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing"></a>

```python
only_passing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines if instances that return a warning from a health check are allowed to resolve a request.

When set to false, instances with passing and warning states are considered healthy. When set to true, only instances with a passing health check state are considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#only_passing ConfigEntryServiceResolver#only_passing}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceResolverFailoverList <a name="ConfigEntryServiceResolverFailoverList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverFailoverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverFailoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]]

---


### ConfigEntryServiceResolverFailoverOutputReference <a name="ConfigEntryServiceResolverFailoverOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters">reset_datacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup">reset_sameness_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset">reset_service_subset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_targets` <a name="put_targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets"></a>

```python
def put_targets(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailoverTargets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]]

---

##### `reset_datacenters` <a name="reset_datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters"></a>

```python
def reset_datacenters() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_sameness_group` <a name="reset_sameness_group" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup"></a>

```python
def reset_sameness_group() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_service_subset` <a name="reset_service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset"></a>

```python
def reset_service_subset() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput">datacenters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput">sameness_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput">service_subset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput">subset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput">targets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters">datacenters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup">sameness_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset">service_subset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName">subset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets"></a>

```python
targets: ConfigEntryServiceResolverFailoverTargetsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a>

---

##### `datacenters_input`<sup>Optional</sup> <a name="datacenters_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput"></a>

```python
datacenters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `sameness_group_input`<sup>Optional</sup> <a name="sameness_group_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput"></a>

```python
sameness_group_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_subset_input`<sup>Optional</sup> <a name="service_subset_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput"></a>

```python
service_subset_input: str
```

- *Type:* str

---

##### `subset_name_input`<sup>Optional</sup> <a name="subset_name_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput"></a>

```python
subset_name_input: str
```

- *Type:* str

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput"></a>

```python
targets_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailoverTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]]

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters"></a>

```python
datacenters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `sameness_group`<sup>Required</sup> <a name="sameness_group" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup"></a>

```python
sameness_group: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_subset`<sup>Required</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

---

##### `subset_name`<sup>Required</sup> <a name="subset_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName"></a>

```python
subset_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverFailover]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>]

---


### ConfigEntryServiceResolverFailoverTargetsList <a name="ConfigEntryServiceResolverFailoverTargetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverFailoverTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverFailoverTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]]

---


### ConfigEntryServiceResolverFailoverTargetsOutputReference <a name="ConfigEntryServiceResolverFailoverTargetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer">reset_peer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset">reset_service_subset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_peer` <a name="reset_peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer"></a>

```python
def reset_peer() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_service_subset` <a name="reset_service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset"></a>

```python
def reset_service_subset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput">peer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput">service_subset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer">peer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset">service_subset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `peer_input`<sup>Optional</sup> <a name="peer_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput"></a>

```python
peer_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_subset_input`<sup>Optional</sup> <a name="service_subset_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput"></a>

```python
service_subset_input: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer"></a>

```python
peer: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_subset`<sup>Required</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverFailoverTargets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>]

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]]

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession">reset_session</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_session` <a name="reset_session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession"></a>

```python
def reset_session() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput">session_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session">session</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `session_input`<sup>Optional</sup> <a name="session_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput"></a>

```python
session_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `session`<sup>Required</sup> <a name="session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session"></a>

```python
session: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]]

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig">put_cookie_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig">reset_cookie_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue">reset_field_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal">reset_terminal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cookie_config` <a name="put_cookie_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig"></a>

```python
def put_cookie_config(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]]

---

##### `reset_cookie_config` <a name="reset_cookie_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig"></a>

```python
def reset_cookie_config() -> None
```

##### `reset_field` <a name="reset_field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_field_value` <a name="reset_field_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue"></a>

```python
def reset_field_value() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_terminal` <a name="reset_terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal"></a>

```python
def reset_terminal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig">cookie_config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput">cookie_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput">field_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput">source_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput">terminal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue">field_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp">source_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal">terminal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_config`<sup>Required</sup> <a name="cookie_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig"></a>

```python
cookie_config: ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a>

---

##### `cookie_config_input`<sup>Optional</sup> <a name="cookie_config_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput"></a>

```python
cookie_config_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>]]

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `field_value_input`<sup>Optional</sup> <a name="field_value_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput"></a>

```python
field_value_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput"></a>

```python
source_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal_input`<sup>Optional</sup> <a name="terminal_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput"></a>

```python
terminal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `field_value`<sup>Required</sup> <a name="field_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue"></a>

```python
field_value: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp"></a>

```python
source_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terminal`<sup>Required</sup> <a name="terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal"></a>

```python
terminal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverLoadBalancerHashPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerLeastRequestConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]]

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount">reset_choice_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_choice_count` <a name="reset_choice_count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount"></a>

```python
def reset_choice_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput">choice_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount">choice_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `choice_count_input`<sup>Optional</sup> <a name="choice_count_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput"></a>

```python
choice_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `choice_count`<sup>Required</sup> <a name="choice_count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount"></a>

```python
choice_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverLoadBalancerLeastRequestConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]

---


### ConfigEntryServiceResolverLoadBalancerList <a name="ConfigEntryServiceResolverLoadBalancerList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]]

---


### ConfigEntryServiceResolverLoadBalancerOutputReference <a name="ConfigEntryServiceResolverLoadBalancerOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies">put_hash_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig">put_least_request_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig">put_ring_hash_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies">reset_hash_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig">reset_least_request_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig">reset_ring_hash_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hash_policies` <a name="put_hash_policies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies"></a>

```python
def put_hash_policies(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]]

---

##### `put_least_request_config` <a name="put_least_request_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig"></a>

```python
def put_least_request_config(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerLeastRequestConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]]

---

##### `put_ring_hash_config` <a name="put_ring_hash_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig"></a>

```python
def put_ring_hash_config(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerRingHashConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]]

---

##### `reset_hash_policies` <a name="reset_hash_policies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies"></a>

```python
def reset_hash_policies() -> None
```

##### `reset_least_request_config` <a name="reset_least_request_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig"></a>

```python
def reset_least_request_config() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_ring_hash_config` <a name="reset_ring_hash_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig"></a>

```python
def reset_ring_hash_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies">hash_policies</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig">least_request_config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig">ring_hash_config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput">hash_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput">least_request_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput">ring_hash_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash_policies`<sup>Required</sup> <a name="hash_policies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies"></a>

```python
hash_policies: ConfigEntryServiceResolverLoadBalancerHashPoliciesList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a>

---

##### `least_request_config`<sup>Required</sup> <a name="least_request_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig"></a>

```python
least_request_config: ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a>

---

##### `ring_hash_config`<sup>Required</sup> <a name="ring_hash_config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig"></a>

```python
ring_hash_config: ConfigEntryServiceResolverLoadBalancerRingHashConfigList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a>

---

##### `hash_policies_input`<sup>Optional</sup> <a name="hash_policies_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput"></a>

```python
hash_policies_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerHashPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>]]

---

##### `least_request_config_input`<sup>Optional</sup> <a name="least_request_config_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput"></a>

```python
least_request_config_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerLeastRequestConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>]]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `ring_hash_config_input`<sup>Optional</sup> <a name="ring_hash_config_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput"></a>

```python
ring_hash_config_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerRingHashConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverLoadBalancer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>]

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigList <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverLoadBalancerRingHashConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]]

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize">reset_maximum_ring_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize">reset_minimum_ring_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_ring_size` <a name="reset_maximum_ring_size" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize"></a>

```python
def reset_maximum_ring_size() -> None
```

##### `reset_minimum_ring_size` <a name="reset_minimum_ring_size" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize"></a>

```python
def reset_minimum_ring_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput">maximum_ring_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput">minimum_ring_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize">maximum_ring_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize">minimum_ring_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_ring_size_input`<sup>Optional</sup> <a name="maximum_ring_size_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput"></a>

```python
maximum_ring_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_ring_size_input`<sup>Optional</sup> <a name="minimum_ring_size_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput"></a>

```python
minimum_ring_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_ring_size`<sup>Required</sup> <a name="maximum_ring_size" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize"></a>

```python
maximum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_ring_size`<sup>Required</sup> <a name="minimum_ring_size" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize"></a>

```python
minimum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverLoadBalancerRingHashConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>]

---


### ConfigEntryServiceResolverRedirectList <a name="ConfigEntryServiceResolverRedirectList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverRedirectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverRedirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverRedirect]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]]

---


### ConfigEntryServiceResolverRedirectOutputReference <a name="ConfigEntryServiceResolverRedirectOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer">reset_peer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup">reset_sameness_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset">reset_service_subset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_peer` <a name="reset_peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer"></a>

```python
def reset_peer() -> None
```

##### `reset_sameness_group` <a name="reset_sameness_group" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup"></a>

```python
def reset_sameness_group() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_service_subset` <a name="reset_service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset"></a>

```python
def reset_service_subset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput">peer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput">sameness_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput">service_subset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer">peer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup">sameness_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset">service_subset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `peer_input`<sup>Optional</sup> <a name="peer_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput"></a>

```python
peer_input: str
```

- *Type:* str

---

##### `sameness_group_input`<sup>Optional</sup> <a name="sameness_group_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput"></a>

```python
sameness_group_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_subset_input`<sup>Optional</sup> <a name="service_subset_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput"></a>

```python
service_subset_input: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer"></a>

```python
peer: str
```

- *Type:* str

---

##### `sameness_group`<sup>Required</sup> <a name="sameness_group" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup"></a>

```python
sameness_group: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_subset`<sup>Required</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverRedirect]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>]

---


### ConfigEntryServiceResolverSubsetsList <a name="ConfigEntryServiceResolverSubsetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceResolverSubsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceResolverSubsets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]]

---


### ConfigEntryServiceResolverSubsetsOutputReference <a name="ConfigEntryServiceResolverSubsetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_resolver

configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput">only_passing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing">only_passing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `only_passing_input`<sup>Optional</sup> <a name="only_passing_input" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput"></a>

```python
only_passing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `only_passing`<sup>Required</sup> <a name="only_passing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing"></a>

```python
only_passing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceResolverSubsets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>]

---



