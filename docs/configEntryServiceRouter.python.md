# `configEntryServiceRouter` Submodule <a name="`configEntryServiceRouter` Submodule" id="@cdktf/provider-consul.configEntryServiceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceRouter <a name="ConfigEntryServiceRouter" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router consul_config_entry_service_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouter(
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
  id: str = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None,
  routes: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutes]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.partition">partition</a></code> | <code>str</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.routes">routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]</code> | routes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.name"></a>

- *Type:* str

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.meta"></a>

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#meta ConfigEntryServiceRouter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.namespace"></a>

- *Type:* str

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.partition"></a>

- *Type:* str

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.routes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#routes ConfigEntryServiceRouter#routes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes">put_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes">reset_routes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_routes` <a name="put_routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes"></a>

```python
def put_routes(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_routes` <a name="reset_routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes"></a>

```python
def reset_routes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigEntryServiceRouter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigEntryServiceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput">meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput">routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition">partition</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes"></a>

```python
routes: ConfigEntryServiceRouterRoutesList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput"></a>

```python
meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `routes_input`<sup>Optional</sup> <a name="routes_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput"></a>

```python
routes_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceRouterConfig <a name="ConfigEntryServiceRouterConfig" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None,
  routes: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name">name</a></code> | <code>str</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition">partition</a></code> | <code>str</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes">routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]</code> | routes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#meta ConfigEntryServiceRouter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes"></a>

```python
routes: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#routes ConfigEntryServiceRouter#routes}

---

### ConfigEntryServiceRouterRoutes <a name="ConfigEntryServiceRouterRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutes(
  destination: ConfigEntryServiceRouterRoutesDestination = None,
  match: ConfigEntryServiceRouterRoutesMatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match">match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | match block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination"></a>

```python
destination: ConfigEntryServiceRouterRoutesDestination
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#destination ConfigEntryServiceRouter#destination}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match"></a>

```python
match: ConfigEntryServiceRouterRoutesMatch
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#match ConfigEntryServiceRouter#match}

---

### ConfigEntryServiceRouterRoutesDestination <a name="ConfigEntryServiceRouterRoutesDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination(
  idle_timeout: str = None,
  namespace: str = None,
  num_retries: typing.Union[int, float] = None,
  partition: str = None,
  prefix_rewrite: str = None,
  request_headers: ConfigEntryServiceRouterRoutesDestinationRequestHeaders = None,
  request_timeout: str = None,
  response_headers: ConfigEntryServiceRouterRoutesDestinationResponseHeaders = None,
  retry_on: typing.List[str] = None,
  retry_on_connect_failure: typing.Union[bool, IResolvable] = None,
  retry_on_status_codes: typing.List[typing.Union[int, float]] = None,
  service: str = None,
  service_subset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | Specifies the total amount of time permitted for the request stream to be idle. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace">namespace</a></code> | <code>str</code> | Specifies the Consul namespace to resolve the service from instead of the current namespace. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of times to retry the request when a retry condition occurs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition">partition</a></code> | <code>str</code> | Specifies the Consul admin partition to resolve the service from instead of the current partition. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite">prefix_rewrite</a></code> | <code>str</code> | Specifies rewrites to the HTTP request path before proxying it to its final destination. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders">request_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout">request_timeout</a></code> | <code>str</code> | Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders">response_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn">retry_on</a></code> | <code>typing.List[str]</code> | Specifies a list of conditions for Consul to retry requests based on the response from an upstream service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure">retry_on_connect_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that connection failure errors that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes">retry_on_status_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Specifies a list of integers for HTTP response status codes that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service">service</a></code> | <code>str</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset">service_subset</a></code> | <code>str</code> | Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry. |

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

Specifies the total amount of time permitted for the request stream to be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#idle_timeout ConfigEntryServiceRouter#idle_timeout}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the Consul namespace to resolve the service from instead of the current namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `num_retries`<sup>Optional</sup> <a name="num_retries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of times to retry the request when a retry condition occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#num_retries ConfigEntryServiceRouter#num_retries}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the Consul admin partition to resolve the service from instead of the current partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `prefix_rewrite`<sup>Optional</sup> <a name="prefix_rewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite"></a>

```python
prefix_rewrite: str
```

- *Type:* str

Specifies rewrites to the HTTP request path before proxying it to its final destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#prefix_rewrite ConfigEntryServiceRouter#prefix_rewrite}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders"></a>

```python
request_headers: ConfigEntryServiceRouterRoutesDestinationRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_headers ConfigEntryServiceRouter#request_headers}

---

##### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_timeout ConfigEntryServiceRouter#request_timeout}

---

##### `response_headers`<sup>Optional</sup> <a name="response_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders"></a>

```python
response_headers: ConfigEntryServiceRouterRoutesDestinationResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#response_headers ConfigEntryServiceRouter#response_headers}

---

##### `retry_on`<sup>Optional</sup> <a name="retry_on" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn"></a>

```python
retry_on: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of conditions for Consul to retry requests based on the response from an upstream service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on ConfigEntryServiceRouter#retry_on}

---

##### `retry_on_connect_failure`<sup>Optional</sup> <a name="retry_on_connect_failure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure"></a>

```python
retry_on_connect_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that connection failure errors that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_connect_failure ConfigEntryServiceRouter#retry_on_connect_failure}

---

##### `retry_on_status_codes`<sup>Optional</sup> <a name="retry_on_status_codes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes"></a>

```python
retry_on_status_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Specifies a list of integers for HTTP response status codes that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_status_codes ConfigEntryServiceRouter#retry_on_status_codes}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service"></a>

```python
service: str
```

- *Type:* str

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service ConfigEntryServiceRouter#service}

---

##### `service_subset`<sup>Optional</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service_subset ConfigEntryServiceRouter#service_subset}

---

### ConfigEntryServiceRouterRoutesDestinationRequestHeaders <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add">add</a></code> | <code>typing.Mapping[str]</code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove">remove</a></code> | <code>typing.List[str]</code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set">set</a></code> | <code>typing.Mapping[str]</code> | Defines a set of key-value pairs to add to the request header or to replace existing header values with. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the request header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesDestinationResponseHeaders <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add">add</a></code> | <code>typing.Mapping[str]</code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove">remove</a></code> | <code>typing.List[str]</code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set">set</a></code> | <code>typing.Mapping[str]</code> | Defines a set of key-value pairs to add to the response header or to replace existing header values with. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the response header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesMatch <a name="ConfigEntryServiceRouterRoutesMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch(
  http: ConfigEntryServiceRouterRoutesMatchHttp = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | http block. |

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http"></a>

```python
http: ConfigEntryServiceRouterRoutesMatchHttp
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#http ConfigEntryServiceRouter#http}

---

### ConfigEntryServiceRouterRoutesMatchHttp <a name="ConfigEntryServiceRouterRoutesMatchHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp(
  header: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpHeader]] = None,
  methods: typing.List[str] = None,
  path_exact: str = None,
  path_prefix: str = None,
  path_regex: str = None,
  query_param: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpQueryParam]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods">methods</a></code> | <code>typing.List[str]</code> | Specifies HTTP methods that the match applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact">path_exact</a></code> | <code>str</code> | Specifies the exact path to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix">path_prefix</a></code> | <code>str</code> | Specifies the path prefix to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex">path_regex</a></code> | <code>str</code> | Specifies a regular expression to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam">query_param</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]</code> | query_param block. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#header ConfigEntryServiceRouter#header}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

Specifies HTTP methods that the match applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#methods ConfigEntryServiceRouter#methods}

---

##### `path_exact`<sup>Optional</sup> <a name="path_exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact"></a>

```python
path_exact: str
```

- *Type:* str

Specifies the exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_exact ConfigEntryServiceRouter#path_exact}

---

##### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

Specifies the path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_prefix ConfigEntryServiceRouter#path_prefix}

---

##### `path_regex`<sup>Optional</sup> <a name="path_regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex"></a>

```python
path_regex: str
```

- *Type:* str

Specifies a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_regex ConfigEntryServiceRouter#path_regex}

---

##### `query_param`<sup>Optional</sup> <a name="query_param" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam"></a>

```python
query_param: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]

query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#query_param ConfigEntryServiceRouter#query_param}

---

### ConfigEntryServiceRouterRoutesMatchHttpHeader <a name="ConfigEntryServiceRouterRoutesMatchHttpHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader(
  exact: str = None,
  invert: typing.Union[bool, IResolvable] = None,
  name: str = None,
  prefix: str = None,
  present: typing.Union[bool, IResolvable] = None,
  regex: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact">exact</a></code> | <code>str</code> | Specifies that a request matches when the header with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that the logic for the HTTP header match should be inverted. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name">name</a></code> | <code>str</code> | Specifies the name of the HTTP header to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix">prefix</a></code> | <code>str</code> | Specifies that a request matches when the header with the given name has this prefix. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present">present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex">regex</a></code> | <code>str</code> | Specifies that a request matches when the header with the given name matches this regular expression. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix">suffix</a></code> | <code>str</code> | Specifies that a request matches when the header with the given name has this suffix. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact"></a>

```python
exact: str
```

- *Type:* str

Specifies that a request matches when the header with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that the logic for the HTTP header match should be inverted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#invert ConfigEntryServiceRouter#invert}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the HTTP header to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Specifies that a request matches when the header with the given name has this prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#prefix ConfigEntryServiceRouter#prefix}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present"></a>

```python
present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex"></a>

```python
regex: str
```

- *Type:* str

Specifies that a request matches when the header with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Specifies that a request matches when the header with the given name has this suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#suffix ConfigEntryServiceRouter#suffix}

---

### ConfigEntryServiceRouterRoutesMatchHttpQueryParam <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam(
  exact: str = None,
  name: str = None,
  present: typing.Union[bool, IResolvable] = None,
  regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact">exact</a></code> | <code>str</code> | Specifies that a request matches when the query parameter with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name">name</a></code> | <code>str</code> | Specifies the name of the HTTP query parameter to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present">present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex">regex</a></code> | <code>str</code> | Specifies that a request matches when the query parameter with the given name matches this regular expression. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact"></a>

```python
exact: str
```

- *Type:* str

Specifies that a request matches when the query parameter with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the HTTP query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present"></a>

```python
present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex"></a>

```python
regex: str
```

- *Type:* str

Specifies that a request matches when the query parameter with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceRouterRoutesDestinationOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders">put_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders">put_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries">reset_num_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite">reset_prefix_rewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout">reset_request_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders">reset_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn">reset_retry_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure">reset_retry_on_connect_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes">reset_retry_on_status_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset">reset_service_subset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_headers` <a name="put_request_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders"></a>

```python
def put_request_headers(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders.parameter.add"></a>

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders.parameter.remove"></a>

- *Type:* typing.List[str]

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

###### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders.parameter.set"></a>

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the request header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

##### `put_response_headers` <a name="put_response_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders"></a>

```python
def put_response_headers(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders.parameter.add"></a>

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders.parameter.remove"></a>

- *Type:* typing.List[str]

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

###### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders.parameter.set"></a>

- *Type:* typing.Mapping[str]

Defines a set of key-value pairs to add to the response header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_num_retries` <a name="reset_num_retries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries"></a>

```python
def reset_num_retries() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_prefix_rewrite` <a name="reset_prefix_rewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite"></a>

```python
def reset_prefix_rewrite() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_request_timeout` <a name="reset_request_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout"></a>

```python
def reset_request_timeout() -> None
```

##### `reset_response_headers` <a name="reset_response_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders"></a>

```python
def reset_response_headers() -> None
```

##### `reset_retry_on` <a name="reset_retry_on" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn"></a>

```python
def reset_retry_on() -> None
```

##### `reset_retry_on_connect_failure` <a name="reset_retry_on_connect_failure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure"></a>

```python
def reset_retry_on_connect_failure() -> None
```

##### `reset_retry_on_status_codes` <a name="reset_retry_on_status_codes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes"></a>

```python
def reset_retry_on_status_codes() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_service_subset` <a name="reset_service_subset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset"></a>

```python
def reset_service_subset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders">request_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders">response_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput">num_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput">prefix_rewrite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput">request_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput">response_headers_input</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput">retry_on_connect_failure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput">retry_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput">retry_on_status_codes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput">service_subset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite">prefix_rewrite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout">request_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn">retry_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure">retry_on_connect_failure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes">retry_on_status_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset">service_subset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders"></a>

```python
request_headers: ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a>

---

##### `response_headers`<sup>Required</sup> <a name="response_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders"></a>

```python
response_headers: ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a>

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `num_retries_input`<sup>Optional</sup> <a name="num_retries_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput"></a>

```python
num_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `prefix_rewrite_input`<sup>Optional</sup> <a name="prefix_rewrite_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput"></a>

```python
prefix_rewrite_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: ConfigEntryServiceRouterRoutesDestinationRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---

##### `request_timeout_input`<sup>Optional</sup> <a name="request_timeout_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput"></a>

```python
request_timeout_input: str
```

- *Type:* str

---

##### `response_headers_input`<sup>Optional</sup> <a name="response_headers_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput"></a>

```python
response_headers_input: ConfigEntryServiceRouterRoutesDestinationResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---

##### `retry_on_connect_failure_input`<sup>Optional</sup> <a name="retry_on_connect_failure_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput"></a>

```python
retry_on_connect_failure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_on_input`<sup>Optional</sup> <a name="retry_on_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput"></a>

```python
retry_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retry_on_status_codes_input`<sup>Optional</sup> <a name="retry_on_status_codes_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput"></a>

```python
retry_on_status_codes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_subset_input`<sup>Optional</sup> <a name="service_subset_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput"></a>

```python
service_subset_input: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `num_retries`<sup>Required</sup> <a name="num_retries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `prefix_rewrite`<sup>Required</sup> <a name="prefix_rewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite"></a>

```python
prefix_rewrite: str
```

- *Type:* str

---

##### `request_timeout`<sup>Required</sup> <a name="request_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout"></a>

```python
request_timeout: str
```

- *Type:* str

---

##### `retry_on`<sup>Required</sup> <a name="retry_on" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn"></a>

```python
retry_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retry_on_connect_failure`<sup>Required</sup> <a name="retry_on_connect_failure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure"></a>

```python
retry_on_connect_failure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retry_on_status_codes`<sup>Required</sup> <a name="retry_on_status_codes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes"></a>

```python
retry_on_status_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_subset`<sup>Required</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue"></a>

```python
internal_value: ConfigEntryServiceRouterRoutesDestination
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---


### ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove">reset_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet">reset_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_remove` <a name="reset_remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet"></a>

```python
def reset_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput">add_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput">remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput">set_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add">add</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove">remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set">set</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput"></a>

```python
add_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput"></a>

```python
remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput"></a>

```python
set_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: ConfigEntryServiceRouterRoutesDestinationRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---


### ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove">reset_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet">reset_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_remove` <a name="reset_remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet"></a>

```python
def reset_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput">add_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput">remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput">set_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add">add</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove">remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set">set</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput"></a>

```python
add_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput"></a>

```python
remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput"></a>

```python
set_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue"></a>

```python
internal_value: ConfigEntryServiceRouterRoutesDestinationResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---


### ConfigEntryServiceRouterRoutesList <a name="ConfigEntryServiceRouterRoutesList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceRouterRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]]

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderList <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert">reset_invert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent">reset_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_invert` <a name="reset_invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert"></a>

```python
def reset_invert() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_present` <a name="reset_present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent"></a>

```python
def reset_present() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput">invert_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput">present_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present">present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `invert_input`<sup>Optional</sup> <a name="invert_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput"></a>

```python
invert_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `present_input`<sup>Optional</sup> <a name="present_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput"></a>

```python
present_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present"></a>

```python
present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceRouterRoutesMatchHttpHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]

---


### ConfigEntryServiceRouterRoutesMatchHttpOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam">put_query_param</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact">reset_path_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix">reset_path_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex">reset_path_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam">reset_query_param</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]

---

##### `put_query_param` <a name="put_query_param" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam"></a>

```python
def put_query_param(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpQueryParam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]

---

##### `reset_header` <a name="reset_header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_path_exact` <a name="reset_path_exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact"></a>

```python
def reset_path_exact() -> None
```

##### `reset_path_prefix` <a name="reset_path_prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix"></a>

```python
def reset_path_prefix() -> None
```

##### `reset_path_regex` <a name="reset_path_regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex"></a>

```python
def reset_path_regex() -> None
```

##### `reset_query_param` <a name="reset_query_param" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam"></a>

```python
def reset_query_param() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam">query_param</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput">path_exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput">path_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput">query_param_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact">path_exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex">path_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header"></a>

```python
header: ConfigEntryServiceRouterRoutesMatchHttpHeaderList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a>

---

##### `query_param`<sup>Required</sup> <a name="query_param" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam"></a>

```python
query_param: ConfigEntryServiceRouterRoutesMatchHttpQueryParamList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_exact_input`<sup>Optional</sup> <a name="path_exact_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput"></a>

```python
path_exact_input: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `path_regex_input`<sup>Optional</sup> <a name="path_regex_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput"></a>

```python
path_regex_input: str
```

- *Type:* str

---

##### `query_param_input`<sup>Optional</sup> <a name="query_param_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput"></a>

```python
query_param_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_exact`<sup>Required</sup> <a name="path_exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact"></a>

```python
path_exact: str
```

- *Type:* str

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `path_regex`<sup>Required</sup> <a name="path_regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex"></a>

```python
path_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue"></a>

```python
internal_value: ConfigEntryServiceRouterRoutesMatchHttp
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamList <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpQueryParam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent">reset_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_present` <a name="reset_present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent"></a>

```python
def reset_present() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput">present_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present">present</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `present_input`<sup>Optional</sup> <a name="present_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput"></a>

```python
present_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present"></a>

```python
present: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceRouterRoutesMatchHttpQueryParam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]

---


### ConfigEntryServiceRouterRoutesMatchOutputReference <a name="ConfigEntryServiceRouterRoutesMatchOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp">put_http</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp">reset_http</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http` <a name="put_http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp"></a>

```python
def put_http(
  header: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpHeader]] = None,
  methods: typing.List[str] = None,
  path_exact: str = None,
  path_prefix: str = None,
  path_regex: str = None,
  query_param: typing.Union[IResolvable, typing.List[ConfigEntryServiceRouterRoutesMatchHttpQueryParam]] = None
) -> None
```

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader">ConfigEntryServiceRouterRoutesMatchHttpHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#header ConfigEntryServiceRouter#header}

---

###### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.methods"></a>

- *Type:* typing.List[str]

Specifies HTTP methods that the match applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#methods ConfigEntryServiceRouter#methods}

---

###### `path_exact`<sup>Optional</sup> <a name="path_exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.pathExact"></a>

- *Type:* str

Specifies the exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_exact ConfigEntryServiceRouter#path_exact}

---

###### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.pathPrefix"></a>

- *Type:* str

Specifies the path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_prefix ConfigEntryServiceRouter#path_prefix}

---

###### `path_regex`<sup>Optional</sup> <a name="path_regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.pathRegex"></a>

- *Type:* str

Specifies a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#path_regex ConfigEntryServiceRouter#path_regex}

---

###### `query_param`<sup>Optional</sup> <a name="query_param" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.queryParam"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam">ConfigEntryServiceRouterRoutesMatchHttpQueryParam</a>]]

query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#query_param ConfigEntryServiceRouter#query_param}

---

##### `reset_http` <a name="reset_http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp"></a>

```python
def reset_http() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput">http_input</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http"></a>

```python
http: ConfigEntryServiceRouterRoutesMatchHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a>

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput"></a>

```python
http_input: ConfigEntryServiceRouterRoutesMatchHttp
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue"></a>

```python
internal_value: ConfigEntryServiceRouterRoutesMatch
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---


### ConfigEntryServiceRouterRoutesOutputReference <a name="ConfigEntryServiceRouterRoutesOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_router

configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch">reset_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination"></a>

```python
def put_destination(
  idle_timeout: str = None,
  namespace: str = None,
  num_retries: typing.Union[int, float] = None,
  partition: str = None,
  prefix_rewrite: str = None,
  request_headers: ConfigEntryServiceRouterRoutesDestinationRequestHeaders = None,
  request_timeout: str = None,
  response_headers: ConfigEntryServiceRouterRoutesDestinationResponseHeaders = None,
  retry_on: typing.List[str] = None,
  retry_on_connect_failure: typing.Union[bool, IResolvable] = None,
  retry_on_status_codes: typing.List[typing.Union[int, float]] = None,
  service: str = None,
  service_subset: str = None
) -> None
```

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.idleTimeout"></a>

- *Type:* str

Specifies the total amount of time permitted for the request stream to be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#idle_timeout ConfigEntryServiceRouter#idle_timeout}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.namespace"></a>

- *Type:* str

Specifies the Consul namespace to resolve the service from instead of the current namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

###### `num_retries`<sup>Optional</sup> <a name="num_retries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.numRetries"></a>

- *Type:* typing.Union[int, float]

Specifies the number of times to retry the request when a retry condition occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#num_retries ConfigEntryServiceRouter#num_retries}

---

###### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.partition"></a>

- *Type:* str

Specifies the Consul admin partition to resolve the service from instead of the current partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

###### `prefix_rewrite`<sup>Optional</sup> <a name="prefix_rewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.prefixRewrite"></a>

- *Type:* str

Specifies rewrites to the HTTP request path before proxying it to its final destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#prefix_rewrite ConfigEntryServiceRouter#prefix_rewrite}

---

###### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.requestHeaders"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_headers ConfigEntryServiceRouter#request_headers}

---

###### `request_timeout`<sup>Optional</sup> <a name="request_timeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.requestTimeout"></a>

- *Type:* str

Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#request_timeout ConfigEntryServiceRouter#request_timeout}

---

###### `response_headers`<sup>Optional</sup> <a name="response_headers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.responseHeaders"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#response_headers ConfigEntryServiceRouter#response_headers}

---

###### `retry_on`<sup>Optional</sup> <a name="retry_on" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.retryOn"></a>

- *Type:* typing.List[str]

Specifies a list of conditions for Consul to retry requests based on the response from an upstream service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on ConfigEntryServiceRouter#retry_on}

---

###### `retry_on_connect_failure`<sup>Optional</sup> <a name="retry_on_connect_failure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.retryOnConnectFailure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that connection failure errors that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_connect_failure ConfigEntryServiceRouter#retry_on_connect_failure}

---

###### `retry_on_status_codes`<sup>Optional</sup> <a name="retry_on_status_codes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.retryOnStatusCodes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Specifies a list of integers for HTTP response status codes that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#retry_on_status_codes ConfigEntryServiceRouter#retry_on_status_codes}

---

###### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.service"></a>

- *Type:* str

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service ConfigEntryServiceRouter#service}

---

###### `service_subset`<sup>Optional</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.serviceSubset"></a>

- *Type:* str

Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#service_subset ConfigEntryServiceRouter#service_subset}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch"></a>

```python
def put_match(
  http: ConfigEntryServiceRouterRoutesMatchHttp = None
) -> None
```

###### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch.parameter.http"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_router#http ConfigEntryServiceRouter#http}

---

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination"></a>

```python
destination: ConfigEntryServiceRouterRoutesDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match"></a>

```python
match: ConfigEntryServiceRouterRoutesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput"></a>

```python
destination_input: ConfigEntryServiceRouterRoutesDestination
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput"></a>

```python
match_input: ConfigEntryServiceRouterRoutesMatch
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceRouterRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes">ConfigEntryServiceRouterRoutes</a>]

---



