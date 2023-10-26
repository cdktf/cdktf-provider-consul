# `consul_config_entry_service_splitter`

Refer to the Terraform Registory for docs: [`consul_config_entry_service_splitter`](https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter).

# `configEntryServiceSplitter` Submodule <a name="`configEntryServiceSplitter` Submodule" id="@cdktf/provider-consul.configEntryServiceSplitter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceSplitter <a name="ConfigEntryServiceSplitter" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter consul_config_entry_service_splitter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitter(
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
  splits: typing.Union[IResolvable, typing.List[ConfigEntryServiceSplitterSplits]],
  id: str = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.splits">splits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]</code> | splits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.partition">partition</a></code> | <code>str</code> | Specifies the admin partition to apply the configuration entry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.name"></a>

- *Type:* str

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#name ConfigEntryServiceSplitter#name}

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.splits"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#splits ConfigEntryServiceSplitter#splits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.meta"></a>

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#meta ConfigEntryServiceSplitter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.namespace"></a>

- *Type:* str

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.partition"></a>

- *Type:* str

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits">put_splits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition">reset_partition</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_splits` <a name="put_splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits"></a>

```python
def put_splits(
  value: typing.Union[IResolvable, typing.List[ConfigEntryServiceSplitterSplits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition"></a>

```python
def reset_partition() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigEntryServiceSplitter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigEntryServiceSplitter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceSplitter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits">splits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput">meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput">splits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition">partition</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits"></a>

```python
splits: ConfigEntryServiceSplitterSplitsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput"></a>

```python
meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `splits_input`<sup>Optional</sup> <a name="splits_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput"></a>

```python
splits_input: typing.Union[IResolvable, typing.List[ConfigEntryServiceSplitterSplits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceSplitterConfig <a name="ConfigEntryServiceSplitterConfig" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  splits: typing.Union[IResolvable, typing.List[ConfigEntryServiceSplitterSplits]],
  id: str = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name">name</a></code> | <code>str</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits">splits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]</code> | splits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition">partition</a></code> | <code>str</code> | Specifies the admin partition to apply the configuration entry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#name ConfigEntryServiceSplitter#name}

---

##### `splits`<sup>Required</sup> <a name="splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits"></a>

```python
splits: typing.Union[IResolvable, typing.List[ConfigEntryServiceSplitterSplits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#splits ConfigEntryServiceSplitter#splits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#meta ConfigEntryServiceSplitter#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

### ConfigEntryServiceSplitterSplits <a name="ConfigEntryServiceSplitterSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterSplits(
  service: str,
  weight: typing.Union[int, float],
  namespace: str = None,
  partition: str = None,
  request_headers: ConfigEntryServiceSplitterSplitsRequestHeaders = None,
  response_headers: ConfigEntryServiceSplitterSplitsResponseHeaders = None,
  service_subset: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service">service</a></code> | <code>str</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Specifies the percentage of traffic sent to the set of service instances specified in the `service` field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition">partition</a></code> | <code>str</code> | Specifies the admin partition to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders">request_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders">response_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset">service_subset</a></code> | <code>str</code> | Specifies a subset of the service to resolve. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service"></a>

```python
service: str
```

- *Type:* str

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#service ConfigEntryServiceSplitter#service}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the percentage of traffic sent to the set of service instances specified in the `service` field.

Each weight must be a floating integer between `0` and `100`. The smallest representable value is `.01`. The sum of weights across all splits must add up to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#weight ConfigEntryServiceSplitter#weight}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the admin partition to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

##### `request_headers`<sup>Optional</sup> <a name="request_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders"></a>

```python
request_headers: ConfigEntryServiceSplitterSplitsRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#request_headers ConfigEntryServiceSplitter#request_headers}

---

##### `response_headers`<sup>Optional</sup> <a name="response_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders"></a>

```python
response_headers: ConfigEntryServiceSplitterSplitsResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#response_headers ConfigEntryServiceSplitter#response_headers}

---

##### `service_subset`<sup>Optional</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

Specifies a subset of the service to resolve.

A service subset assigns a name to a specific subset of discoverable service instances within a datacenter, such as `version2` or `canary`. All services have an unnamed default subset that returns all healthy instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#service_subset ConfigEntryServiceSplitter#service_subset}

---

### ConfigEntryServiceSplitterSplitsRequestHeaders <a name="ConfigEntryServiceSplitterSplitsRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add">add</a></code> | <code>typing.Mapping[str]</code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove">remove</a></code> | <code>typing.List[str]</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set">set</a></code> | <code>typing.Mapping[str]</code> | Map of one or more key-value pairs. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

### ConfigEntryServiceSplitterSplitsResponseHeaders <a name="ConfigEntryServiceSplitterSplitsResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add">add</a></code> | <code>typing.Mapping[str]</code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove">remove</a></code> | <code>typing.List[str]</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set">set</a></code> | <code>typing.Mapping[str]</code> | Map of one or more key-value pairs. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceSplitterSplitsList <a name="ConfigEntryServiceSplitterSplitsList" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceSplitterSplitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigEntryServiceSplitterSplits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]]

---


### ConfigEntryServiceSplitterSplitsOutputReference <a name="ConfigEntryServiceSplitterSplitsOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders">put_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders">put_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders">reset_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders">reset_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset">reset_service_subset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_headers` <a name="put_request_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders"></a>

```python
def put_request_headers(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders.parameter.add"></a>

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders.parameter.remove"></a>

- *Type:* typing.List[str]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

###### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders.parameter.set"></a>

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

##### `put_response_headers` <a name="put_response_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders"></a>

```python
def put_response_headers(
  add: typing.Mapping[str] = None,
  remove: typing.List[str] = None,
  set: typing.Mapping[str] = None
) -> None
```

###### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders.parameter.add"></a>

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

###### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders.parameter.remove"></a>

- *Type:* typing.List[str]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

###### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders.parameter.set"></a>

- *Type:* typing.Mapping[str]

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_request_headers` <a name="reset_request_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders"></a>

```python
def reset_request_headers() -> None
```

##### `reset_response_headers` <a name="reset_response_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders"></a>

```python
def reset_response_headers() -> None
```

##### `reset_service_subset` <a name="reset_service_subset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset"></a>

```python
def reset_service_subset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders">request_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders">response_headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput">request_headers_input</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput">response_headers_input</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput">service_subset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset">service_subset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_headers`<sup>Required</sup> <a name="request_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders"></a>

```python
request_headers: ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a>

---

##### `response_headers`<sup>Required</sup> <a name="response_headers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders"></a>

```python
response_headers: ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a>

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `request_headers_input`<sup>Optional</sup> <a name="request_headers_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput"></a>

```python
request_headers_input: ConfigEntryServiceSplitterSplitsRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `response_headers_input`<sup>Optional</sup> <a name="response_headers_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput"></a>

```python
response_headers_input: ConfigEntryServiceSplitterSplitsResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_subset_input`<sup>Optional</sup> <a name="service_subset_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput"></a>

```python
service_subset_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_subset`<sup>Required</sup> <a name="service_subset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset"></a>

```python
service_subset: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ConfigEntryServiceSplitterSplits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>]

---


### ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove">reset_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet">reset_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_remove` <a name="reset_remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet"></a>

```python
def reset_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput">add_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput">remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput">set_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add">add</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove">remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set">set</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput"></a>

```python
add_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput"></a>

```python
remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput"></a>

```python
set_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: ConfigEntryServiceSplitterSplitsRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---


### ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_splitter

configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd">reset_add</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove">reset_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet">reset_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add` <a name="reset_add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd"></a>

```python
def reset_add() -> None
```

##### `reset_remove` <a name="reset_remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove"></a>

```python
def reset_remove() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet"></a>

```python
def reset_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput">add_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput">remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput">set_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add">add</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove">remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set">set</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput"></a>

```python
add_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove_input`<sup>Optional</sup> <a name="remove_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput"></a>

```python
remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput"></a>

```python
set_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add"></a>

```python
add: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove"></a>

```python
remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set"></a>

```python
set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue"></a>

```python
internal_value: ConfigEntryServiceSplitterSplitsResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---



