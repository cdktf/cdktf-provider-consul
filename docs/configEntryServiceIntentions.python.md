# `configEntryServiceIntentions` Submodule <a name="`configEntryServiceIntentions` Submodule" id="@cdktf/provider-consul.configEntryServiceIntentions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceIntentions <a name="ConfigEntryServiceIntentions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions consul_config_entry_service_intentions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  jwt: IResolvable | typing.List[ConfigEntryServiceIntentionsJwt] = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None,
  sources: IResolvable | typing.List[ConfigEntryServiceIntentionsSources] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies a name of the destination service for all intentions defined in the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.jwt">jwt</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]</code> | jwt block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.partition">partition</a></code> | <code>str</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.sources">sources</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]</code> | sources block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.name"></a>

- *Type:* str

Specifies a name of the destination service for all intentions defined in the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.jwt"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#jwt ConfigEntryServiceIntentions#jwt}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.meta"></a>

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#meta ConfigEntryServiceIntentions#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.namespace"></a>

- *Type:* str

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#namespace ConfigEntryServiceIntentions#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.partition"></a>

- *Type:* str

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#partition ConfigEntryServiceIntentions#partition}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.Initializer.parameter.sources"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#sources ConfigEntryServiceIntentions#sources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt">put_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetJwt">reset_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetMeta">reset_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetSources">reset_sources</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_jwt` <a name="put_jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt"></a>

```python
def put_jwt(
  value: IResolvable | typing.List[ConfigEntryServiceIntentionsJwt]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putJwt.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]

---

##### `put_sources` <a name="put_sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[ConfigEntryServiceIntentionsSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.putSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_jwt` <a name="reset_jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetJwt"></a>

```python
def reset_jwt() -> None
```

##### `reset_meta` <a name="reset_meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetMeta"></a>

```python
def reset_meta() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.resetSources"></a>

```python
def reset_sources() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConfigEntryServiceIntentions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConfigEntryServiceIntentions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigEntryServiceIntentions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigEntryServiceIntentions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceIntentions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList">ConfigEntryServiceIntentionsJwtList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList">ConfigEntryServiceIntentionsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwtInput">jwt_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.metaInput">meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sourcesInput">sources_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partition">partition</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwt"></a>

```python
jwt: ConfigEntryServiceIntentionsJwtList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList">ConfigEntryServiceIntentionsJwtList</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sources"></a>

```python
sources: ConfigEntryServiceIntentionsSourcesList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList">ConfigEntryServiceIntentionsSourcesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `jwt_input`<sup>Optional</sup> <a name="jwt_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.jwtInput"></a>

```python
jwt_input: IResolvable | typing.List[ConfigEntryServiceIntentionsJwt]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]

---

##### `meta_input`<sup>Optional</sup> <a name="meta_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.metaInput"></a>

```python
meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[ConfigEntryServiceIntentionsSources]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceIntentionsConfig <a name="ConfigEntryServiceIntentionsConfig" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  id: str = None,
  jwt: IResolvable | typing.List[ConfigEntryServiceIntentionsJwt] = None,
  meta: typing.Mapping[str] = None,
  namespace: str = None,
  partition: str = None,
  sources: IResolvable | typing.List[ConfigEntryServiceIntentionsSources] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.name">name</a></code> | <code>str</code> | Specifies a name of the destination service for all intentions defined in the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.jwt">jwt</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]</code> | jwt block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.meta">meta</a></code> | <code>typing.Mapping[str]</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.namespace">namespace</a></code> | <code>str</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.partition">partition</a></code> | <code>str</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.sources">sources</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]</code> | sources block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies a name of the destination service for all intentions defined in the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#id ConfigEntryServiceIntentions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.jwt"></a>

```python
jwt: IResolvable | typing.List[ConfigEntryServiceIntentionsJwt]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#jwt ConfigEntryServiceIntentions#jwt}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.meta"></a>

```python
meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#meta ConfigEntryServiceIntentions#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#namespace ConfigEntryServiceIntentions#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#partition ConfigEntryServiceIntentions#partition}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsConfig.property.sources"></a>

```python
sources: IResolvable | typing.List[ConfigEntryServiceIntentionsSources]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#sources ConfigEntryServiceIntentions#sources}

---

### ConfigEntryServiceIntentionsJwt <a name="ConfigEntryServiceIntentionsJwt" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt(
  providers: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProviders] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.property.providers">providers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>]</code> | providers block. |

---

##### `providers`<sup>Optional</sup> <a name="providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt.property.providers"></a>

```python
providers: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProviders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>]

providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#providers ConfigEntryServiceIntentions#providers}

---

### ConfigEntryServiceIntentionsJwtProviders <a name="ConfigEntryServiceIntentionsJwtProviders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders(
  name: str = None,
  verify_claims: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProvidersVerifyClaims] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.name">name</a></code> | <code>str</code> | Specifies the name of a JWT provider defined in the Name field of the jwt-provider configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.verifyClaims">verify_claims</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>]</code> | verify_claims block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of a JWT provider defined in the Name field of the jwt-provider configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `verify_claims`<sup>Optional</sup> <a name="verify_claims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders.property.verifyClaims"></a>

```python
verify_claims: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProvidersVerifyClaims]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>]

verify_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#verify_claims ConfigEntryServiceIntentions#verify_claims}

---

### ConfigEntryServiceIntentionsJwtProvidersVerifyClaims <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims(
  path: typing.List[str] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.path">path</a></code> | <code>typing.List[str]</code> | Specifies the path to the claim in the JSON web token. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.value">value</a></code> | <code>str</code> | Specifies the value to match on when verifying the the claim designated in path. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.path"></a>

```python
path: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the path to the claim in the JSON web token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#path ConfigEntryServiceIntentions#path}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims.property.value"></a>

```python
value: str
```

- *Type:* str

Specifies the value to match on when verifying the the claim designated in path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#value ConfigEntryServiceIntentions#value}

---

### ConfigEntryServiceIntentionsSources <a name="ConfigEntryServiceIntentionsSources" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSources(
  action: str = None,
  description: str = None,
  name: str = None,
  namespace: str = None,
  partition: str = None,
  peer: str = None,
  permissions: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissions] = None,
  precedence: typing.Union[int, float] = None,
  sameness_group: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.action">action</a></code> | <code>str</code> | Specifies the action to take when the source sends traffic to the destination service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.description">description</a></code> | <code>str</code> | Specifies a description of the intention. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.name">name</a></code> | <code>str</code> | Specifies the name of the source that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.namespace">namespace</a></code> | <code>str</code> | Specifies the traffic source namespace that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.partition">partition</a></code> | <code>str</code> | Specifies the name of an admin partition that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.peer">peer</a></code> | <code>str</code> | Specifies the name of a peered Consul cluster that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.permissions">permissions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>]</code> | permissions block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The Precedence field contains a read-only integer. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.samenessGroup">sameness_group</a></code> | <code>str</code> | Specifies the name of a sameness group that the intention allows or denies traffic from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.type">type</a></code> | <code>str</code> | Specifies the type of destination service that the configuration entry applies to. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.action"></a>

```python
action: str
```

- *Type:* str

Specifies the action to take when the source sends traffic to the destination service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#action ConfigEntryServiceIntentions#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.description"></a>

```python
description: str
```

- *Type:* str

Specifies a description of the intention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#description ConfigEntryServiceIntentions#description}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the source that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Specifies the traffic source namespace that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#namespace ConfigEntryServiceIntentions#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.partition"></a>

```python
partition: str
```

- *Type:* str

Specifies the name of an admin partition that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#partition ConfigEntryServiceIntentions#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.peer"></a>

```python
peer: str
```

- *Type:* str

Specifies the name of a peered Consul cluster that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#peer ConfigEntryServiceIntentions#peer}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.permissions"></a>

```python
permissions: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>]

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#permissions ConfigEntryServiceIntentions#permissions}

---

##### `precedence`<sup>Optional</sup> <a name="precedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Precedence field contains a read-only integer.

Consul generates the value based on name configurations for the source and destination services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#precedence ConfigEntryServiceIntentions#precedence}

---

##### `sameness_group`<sup>Optional</sup> <a name="sameness_group" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.samenessGroup"></a>

```python
sameness_group: str
```

- *Type:* str

Specifies the name of a sameness group that the intention allows or denies traffic from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#sameness_group ConfigEntryServiceIntentions#sameness_group}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of destination service that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#type ConfigEntryServiceIntentions#type}

---

### ConfigEntryServiceIntentionsSourcesPermissions <a name="ConfigEntryServiceIntentionsSourcesPermissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions(
  action: str,
  http: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttp]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.action">action</a></code> | <code>str</code> | Specifies the action to take when the source sends traffic to the destination service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.http">http</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>]</code> | http block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.action"></a>

```python
action: str
```

- *Type:* str

Specifies the action to take when the source sends traffic to the destination service.

The value is either allow or deny.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#action ConfigEntryServiceIntentions#action}

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions.property.http"></a>

```python
http: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttp]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>]

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#http ConfigEntryServiceIntentions#http}

---

### ConfigEntryServiceIntentionsSourcesPermissionsHttp <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttp" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp(
  headers: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders] = None,
  methods: typing.List[str] = None,
  path_exact: str = None,
  path_prefix: str = None,
  path_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.headers">headers</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>]</code> | headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.methods">methods</a></code> | <code>typing.List[str]</code> | Specifies a list of HTTP methods. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathExact">path_exact</a></code> | <code>str</code> | Specifies an exact path to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathPrefix">path_prefix</a></code> | <code>str</code> | Specifies a path prefix to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathRegex">path_regex</a></code> | <code>str</code> | Defines a regular expression to match on the HTTP request path. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.headers"></a>

```python
headers: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#headers ConfigEntryServiceIntentions#headers}

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a list of HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#methods ConfigEntryServiceIntentions#methods}

---

##### `path_exact`<sup>Optional</sup> <a name="path_exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathExact"></a>

```python
path_exact: str
```

- *Type:* str

Specifies an exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#path_exact ConfigEntryServiceIntentions#path_exact}

---

##### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

Specifies a path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#path_prefix ConfigEntryServiceIntentions#path_prefix}

---

##### `path_regex`<sup>Optional</sup> <a name="path_regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp.property.pathRegex"></a>

```python
path_regex: str
```

- *Type:* str

Defines a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#path_regex ConfigEntryServiceIntentions#path_regex}

---

### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders(
  name: str,
  exact: str = None,
  invert: bool | IResolvable = None,
  prefix: str = None,
  present: bool | IResolvable = None,
  regex: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.name">name</a></code> | <code>str</code> | Specifies the name of the header to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.exact">exact</a></code> | <code>str</code> | Specifies a value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.invert">invert</a></code> | <code>bool \| cdktf.IResolvable</code> | Inverts the matching logic configured in the Header. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.prefix">prefix</a></code> | <code>str</code> | Specifies a prefix value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.present">present</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables a match if the header configured in the Name field appears in the request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.regex">regex</a></code> | <code>str</code> | Specifies a regular expression pattern as the value for the header key set in the Name field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.suffix">suffix</a></code> | <code>str</code> | Specifies a suffix value for the header key set in the Name field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the header to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#name ConfigEntryServiceIntentions#name}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.exact"></a>

```python
exact: str
```

- *Type:* str

Specifies a value for the header key set in the Name field.

If the request header value matches the Exact value, Consul applies the permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#exact ConfigEntryServiceIntentions#exact}

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.invert"></a>

```python
invert: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Inverts the matching logic configured in the Header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#invert ConfigEntryServiceIntentions#invert}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Specifies a prefix value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#prefix ConfigEntryServiceIntentions#prefix}

---

##### `present`<sup>Optional</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.present"></a>

```python
present: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enables a match if the header configured in the Name field appears in the request.

Consul matches on any value as long as the header key appears in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#present ConfigEntryServiceIntentions#present}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.regex"></a>

```python
regex: str
```

- *Type:* str

Specifies a regular expression pattern as the value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#regex ConfigEntryServiceIntentions#regex}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Specifies a suffix value for the header key set in the Name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_intentions#suffix ConfigEntryServiceIntentions#suffix}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceIntentionsJwtList <a name="ConfigEntryServiceIntentionsJwtList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceIntentionsJwtOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigEntryServiceIntentionsJwt]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>]

---


### ConfigEntryServiceIntentionsJwtOutputReference <a name="ConfigEntryServiceIntentionsJwtOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders">put_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resetProviders">reset_providers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_providers` <a name="put_providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders"></a>

```python
def put_providers(
  value: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProviders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.putProviders.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>]

---

##### `reset_providers` <a name="reset_providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.resetProviders"></a>

```python
def reset_providers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providers">providers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList">ConfigEntryServiceIntentionsJwtProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providersInput">providers_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `providers`<sup>Required</sup> <a name="providers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providers"></a>

```python
providers: ConfigEntryServiceIntentionsJwtProvidersList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList">ConfigEntryServiceIntentionsJwtProvidersList</a>

---

##### `providers_input`<sup>Optional</sup> <a name="providers_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.providersInput"></a>

```python
providers_input: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProviders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigEntryServiceIntentionsJwt
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwt">ConfigEntryServiceIntentionsJwt</a>

---


### ConfigEntryServiceIntentionsJwtProvidersList <a name="ConfigEntryServiceIntentionsJwtProvidersList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceIntentionsJwtProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProviders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>]

---


### ConfigEntryServiceIntentionsJwtProvidersOutputReference <a name="ConfigEntryServiceIntentionsJwtProvidersOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims">put_verify_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetVerifyClaims">reset_verify_claims</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_verify_claims` <a name="put_verify_claims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims"></a>

```python
def put_verify_claims(
  value: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProvidersVerifyClaims]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.putVerifyClaims.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_verify_claims` <a name="reset_verify_claims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.resetVerifyClaims"></a>

```python
def reset_verify_claims() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaims">verify_claims</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList">ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaimsInput">verify_claims_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `verify_claims`<sup>Required</sup> <a name="verify_claims" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaims"></a>

```python
verify_claims: ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList">ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `verify_claims_input`<sup>Optional</sup> <a name="verify_claims_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.verifyClaimsInput"></a>

```python
verify_claims_input: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProvidersVerifyClaims]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigEntryServiceIntentionsJwtProviders
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProviders">ConfigEntryServiceIntentionsJwtProviders</a>

---


### ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigEntryServiceIntentionsJwtProvidersVerifyClaims]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>]

---


### ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference <a name="ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.pathInput">path_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.path">path</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.pathInput"></a>

```python
path_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.path"></a>

```python
path: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaimsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigEntryServiceIntentionsJwtProvidersVerifyClaims
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsJwtProvidersVerifyClaims">ConfigEntryServiceIntentionsJwtProvidersVerifyClaims</a>

---


### ConfigEntryServiceIntentionsSourcesList <a name="ConfigEntryServiceIntentionsSourcesList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceIntentionsSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigEntryServiceIntentionsSources]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>]

---


### ConfigEntryServiceIntentionsSourcesOutputReference <a name="ConfigEntryServiceIntentionsSourcesOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPeer">reset_peer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPrecedence">reset_precedence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetSamenessGroup">reset_sameness_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions"></a>

```python
def put_permissions(
  value: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.putPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_peer` <a name="reset_peer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPeer"></a>

```python
def reset_peer() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_precedence` <a name="reset_precedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetPrecedence"></a>

```python
def reset_precedence() -> None
```

##### `reset_sameness_group` <a name="reset_sameness_group" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetSamenessGroup"></a>

```python
def reset_sameness_group() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList">ConfigEntryServiceIntentionsSourcesPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peerInput">peer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissionsInput">permissions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedenceInput">precedence_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroupInput">sameness_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peer">peer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroup">sameness_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissions"></a>

```python
permissions: ConfigEntryServiceIntentionsSourcesPermissionsList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList">ConfigEntryServiceIntentionsSourcesPermissionsList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `peer_input`<sup>Optional</sup> <a name="peer_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peerInput"></a>

```python
peer_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.permissionsInput"></a>

```python
permissions_input: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>]

---

##### `precedence_input`<sup>Optional</sup> <a name="precedence_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedenceInput"></a>

```python
precedence_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sameness_group_input`<sup>Optional</sup> <a name="sameness_group_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroupInput"></a>

```python
sameness_group_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.peer"></a>

```python
peer: str
```

- *Type:* str

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sameness_group`<sup>Required</sup> <a name="sameness_group" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.samenessGroup"></a>

```python
sameness_group: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigEntryServiceIntentionsSources
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSources">ConfigEntryServiceIntentionsSources</a>

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>]

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetInvert">reset_invert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPresent">reset_present</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_invert` <a name="reset_invert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetInvert"></a>

```python
def reset_invert() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_present` <a name="reset_present" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetPresent"></a>

```python
def reset_present() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invertInput">invert_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.presentInput">present_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invert">invert</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.present">present</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `invert_input`<sup>Optional</sup> <a name="invert_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invertInput"></a>

```python
invert_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `present_input`<sup>Optional</sup> <a name="present_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.presentInput"></a>

```python
present_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.invert"></a>

```python
invert: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `present`<sup>Required</sup> <a name="present" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.present"></a>

```python
present: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpList <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttp]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>]

---


### ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetMethods">reset_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathExact">reset_path_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathPrefix">reset_path_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathRegex">reset_path_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders"></a>

```python
def put_headers(
  value: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>]

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_methods` <a name="reset_methods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetMethods"></a>

```python
def reset_methods() -> None
```

##### `reset_path_exact` <a name="reset_path_exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathExact"></a>

```python
def reset_path_exact() -> None
```

##### `reset_path_prefix` <a name="reset_path_prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathPrefix"></a>

```python
def reset_path_prefix() -> None
```

##### `reset_path_regex` <a name="reset_path_regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.resetPathRegex"></a>

```python
def reset_path_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headersInput">headers_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methodsInput">methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExactInput">path_exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegexInput">path_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methods">methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExact">path_exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegex">path_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headers"></a>

```python
headers: ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeadersList</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.headersInput"></a>

```python
headers_input: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders">ConfigEntryServiceIntentionsSourcesPermissionsHttpHeaders</a>]

---

##### `methods_input`<sup>Optional</sup> <a name="methods_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methodsInput"></a>

```python
methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_exact_input`<sup>Optional</sup> <a name="path_exact_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExactInput"></a>

```python
path_exact_input: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `path_regex_input`<sup>Optional</sup> <a name="path_regex_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegexInput"></a>

```python
path_regex_input: str
```

- *Type:* str

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.methods"></a>

```python
methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `path_exact`<sup>Required</sup> <a name="path_exact" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathExact"></a>

```python
path_exact: str
```

- *Type:* str

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `path_regex`<sup>Required</sup> <a name="path_regex" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.pathRegex"></a>

```python
path_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigEntryServiceIntentionsSourcesPermissionsHttp
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>

---


### ConfigEntryServiceIntentionsSourcesPermissionsList <a name="ConfigEntryServiceIntentionsSourcesPermissionsList" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigEntryServiceIntentionsSourcesPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>]

---


### ConfigEntryServiceIntentionsSourcesPermissionsOutputReference <a name="ConfigEntryServiceIntentionsSourcesPermissionsOutputReference" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import config_entry_service_intentions

configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp">put_http</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http` <a name="put_http" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp"></a>

```python
def put_http(
  value: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttp]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.putHttp.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList">ConfigEntryServiceIntentionsSourcesPermissionsHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.httpInput">http_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.http"></a>

```python
http: ConfigEntryServiceIntentionsSourcesPermissionsHttpList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttpList">ConfigEntryServiceIntentionsSourcesPermissionsHttpList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `http_input`<sup>Optional</sup> <a name="http_input" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.httpInput"></a>

```python
http_input: IResolvable | typing.List[ConfigEntryServiceIntentionsSourcesPermissionsHttp]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsHttp">ConfigEntryServiceIntentionsSourcesPermissionsHttp</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigEntryServiceIntentionsSourcesPermissions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceIntentions.ConfigEntryServiceIntentionsSourcesPermissions">ConfigEntryServiceIntentionsSourcesPermissions</a>

---



