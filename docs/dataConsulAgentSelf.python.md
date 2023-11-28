# `dataConsulAgentSelf` Submodule <a name="`dataConsulAgentSelf` Submodule" id="@cdktf/provider-consul.dataConsulAgentSelf"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAgentSelf <a name="DataConsulAgentSelf" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/agent_self consul_agent_self}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_agent_self

dataConsulAgentSelf.DataConsulAgentSelf(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataConsulAgentSelf resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_agent_self

dataConsulAgentSelf.DataConsulAgentSelf.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_agent_self

dataConsulAgentSelf.DataConsulAgentSelf.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_agent_self

dataConsulAgentSelf.DataConsulAgentSelf.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_agent_self

dataConsulAgentSelf.DataConsulAgentSelf.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataConsulAgentSelf resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataConsulAgentSelf to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataConsulAgentSelf that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/agent_self#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulAgentSelf to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter">acl_datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy">acl_default_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl">acl_disabled_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy">acl_down_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics">acl_enforce08_semantics</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl">acl_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses">addresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr">advertise_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs">advertise_addrs</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan">advertise_addr_wan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin">atlas_join</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr">bind_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect">bootstrap_expect</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode">bootstrap_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin">check_deregister_interval_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval">check_reap_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval">check_update_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr">client_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir">data_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode">dev_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns">dns</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors">dns_recursors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature">enable_anonymous_signature</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates">enable_coordinates</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug">enable_debug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec">enable_remote_exec</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog">enable_syslog</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi">enable_ui</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck">enable_update_check</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt">leave_on_int</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm">leave_on_term</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance">performance</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile">pid_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports">ports</a></code> | <code>cdktf.NumberMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion">protocol_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan">reconnect_timeout_lan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan">reconnect_timeout_wan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave">rejoin_after_leave</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin">retry_join</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2">retry_join_ec2</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce">retry_join_gce</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan">retry_join_wan</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts">retry_max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan">retry_max_attempts_wan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr">serf_lan_bind_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr">serf_wan_bind_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode">server_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin">session_ttl_min</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin">start_join</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan">start_join_wan</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility">syslog_facility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses">tagged_addresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry">telemetry</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile">tls_ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile">tls_cert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile">tls_key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion">tls_min_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming">tls_verify_incoming</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing">tls_verify_outgoing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname">tls_verify_server_hostname</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs">translate_wan_addrs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir">ui_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets">unix_sockets</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease">version_prerelease</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision">version_revision</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `acl_datacenter`<sup>Required</sup> <a name="acl_datacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDatacenter"></a>

```python
acl_datacenter: str
```

- *Type:* str

---

##### `acl_default_policy`<sup>Required</sup> <a name="acl_default_policy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDefaultPolicy"></a>

```python
acl_default_policy: str
```

- *Type:* str

---

##### `acl_disabled_ttl`<sup>Required</sup> <a name="acl_disabled_ttl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDisabledTtl"></a>

```python
acl_disabled_ttl: str
```

- *Type:* str

---

##### `acl_down_policy`<sup>Required</sup> <a name="acl_down_policy" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclDownPolicy"></a>

```python
acl_down_policy: str
```

- *Type:* str

---

##### `acl_enforce08_semantics`<sup>Required</sup> <a name="acl_enforce08_semantics" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclEnforce08Semantics"></a>

```python
acl_enforce08_semantics: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `acl_ttl`<sup>Required</sup> <a name="acl_ttl" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.aclTtl"></a>

```python
acl_ttl: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.addresses"></a>

```python
addresses: StringMap
```

- *Type:* cdktf.StringMap

---

##### `advertise_addr`<sup>Required</sup> <a name="advertise_addr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddr"></a>

```python
advertise_addr: str
```

- *Type:* str

---

##### `advertise_addrs`<sup>Required</sup> <a name="advertise_addrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrs"></a>

```python
advertise_addrs: StringMap
```

- *Type:* cdktf.StringMap

---

##### `advertise_addr_wan`<sup>Required</sup> <a name="advertise_addr_wan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.advertiseAddrWan"></a>

```python
advertise_addr_wan: str
```

- *Type:* str

---

##### `atlas_join`<sup>Required</sup> <a name="atlas_join" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.atlasJoin"></a>

```python
atlas_join: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bind_addr`<sup>Required</sup> <a name="bind_addr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bindAddr"></a>

```python
bind_addr: str
```

- *Type:* str

---

##### `bootstrap_expect`<sup>Required</sup> <a name="bootstrap_expect" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapExpect"></a>

```python
bootstrap_expect: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bootstrap_mode`<sup>Required</sup> <a name="bootstrap_mode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.bootstrapMode"></a>

```python
bootstrap_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `check_deregister_interval_min`<sup>Required</sup> <a name="check_deregister_interval_min" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkDeregisterIntervalMin"></a>

```python
check_deregister_interval_min: str
```

- *Type:* str

---

##### `check_reap_interval`<sup>Required</sup> <a name="check_reap_interval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkReapInterval"></a>

```python
check_reap_interval: str
```

- *Type:* str

---

##### `check_update_interval`<sup>Required</sup> <a name="check_update_interval" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.checkUpdateInterval"></a>

```python
check_update_interval: str
```

- *Type:* str

---

##### `client_addr`<sup>Required</sup> <a name="client_addr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.clientAddr"></a>

```python
client_addr: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `data_dir`<sup>Required</sup> <a name="data_dir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dataDir"></a>

```python
data_dir: str
```

- *Type:* str

---

##### `dev_mode`<sup>Required</sup> <a name="dev_mode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.devMode"></a>

```python
dev_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dns"></a>

```python
dns: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dns_recursors`<sup>Required</sup> <a name="dns_recursors" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.dnsRecursors"></a>

```python
dns_recursors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `enable_anonymous_signature`<sup>Required</sup> <a name="enable_anonymous_signature" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableAnonymousSignature"></a>

```python
enable_anonymous_signature: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_coordinates`<sup>Required</sup> <a name="enable_coordinates" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableCoordinates"></a>

```python
enable_coordinates: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_debug`<sup>Required</sup> <a name="enable_debug" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableDebug"></a>

```python
enable_debug: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_remote_exec`<sup>Required</sup> <a name="enable_remote_exec" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableRemoteExec"></a>

```python
enable_remote_exec: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_syslog`<sup>Required</sup> <a name="enable_syslog" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableSyslog"></a>

```python
enable_syslog: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_ui`<sup>Required</sup> <a name="enable_ui" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUi"></a>

```python
enable_ui: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_update_check`<sup>Required</sup> <a name="enable_update_check" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.enableUpdateCheck"></a>

```python
enable_update_check: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `leave_on_int`<sup>Required</sup> <a name="leave_on_int" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnInt"></a>

```python
leave_on_int: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `leave_on_term`<sup>Required</sup> <a name="leave_on_term" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.leaveOnTerm"></a>

```python
leave_on_term: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `performance`<sup>Required</sup> <a name="performance" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.performance"></a>

```python
performance: StringMap
```

- *Type:* cdktf.StringMap

---

##### `pid_file`<sup>Required</sup> <a name="pid_file" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.pidFile"></a>

```python
pid_file: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.ports"></a>

```python
ports: NumberMap
```

- *Type:* cdktf.NumberMap

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.protocolVersion"></a>

```python
protocol_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reconnect_timeout_lan`<sup>Required</sup> <a name="reconnect_timeout_lan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutLan"></a>

```python
reconnect_timeout_lan: str
```

- *Type:* str

---

##### `reconnect_timeout_wan`<sup>Required</sup> <a name="reconnect_timeout_wan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.reconnectTimeoutWan"></a>

```python
reconnect_timeout_wan: str
```

- *Type:* str

---

##### `rejoin_after_leave`<sup>Required</sup> <a name="rejoin_after_leave" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.rejoinAfterLeave"></a>

```python
rejoin_after_leave: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `retry_join`<sup>Required</sup> <a name="retry_join" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoin"></a>

```python
retry_join: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retry_join_ec2`<sup>Required</sup> <a name="retry_join_ec2" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinEc2"></a>

```python
retry_join_ec2: StringMap
```

- *Type:* cdktf.StringMap

---

##### `retry_join_gce`<sup>Required</sup> <a name="retry_join_gce" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinGce"></a>

```python
retry_join_gce: StringMap
```

- *Type:* cdktf.StringMap

---

##### `retry_join_wan`<sup>Required</sup> <a name="retry_join_wan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryJoinWan"></a>

```python
retry_join_wan: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retry_max_attempts`<sup>Required</sup> <a name="retry_max_attempts" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttempts"></a>

```python
retry_max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_max_attempts_wan`<sup>Required</sup> <a name="retry_max_attempts_wan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.retryMaxAttemptsWan"></a>

```python
retry_max_attempts_wan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `serf_lan_bind_addr`<sup>Required</sup> <a name="serf_lan_bind_addr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfLanBindAddr"></a>

```python
serf_lan_bind_addr: str
```

- *Type:* str

---

##### `serf_wan_bind_addr`<sup>Required</sup> <a name="serf_wan_bind_addr" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serfWanBindAddr"></a>

```python
serf_wan_bind_addr: str
```

- *Type:* str

---

##### `server_mode`<sup>Required</sup> <a name="server_mode" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverMode"></a>

```python
server_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `session_ttl_min`<sup>Required</sup> <a name="session_ttl_min" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.sessionTtlMin"></a>

```python
session_ttl_min: str
```

- *Type:* str

---

##### `start_join`<sup>Required</sup> <a name="start_join" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoin"></a>

```python
start_join: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_join_wan`<sup>Required</sup> <a name="start_join_wan" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.startJoinWan"></a>

```python
start_join_wan: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `syslog_facility`<sup>Required</sup> <a name="syslog_facility" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.syslogFacility"></a>

```python
syslog_facility: str
```

- *Type:* str

---

##### `tagged_addresses`<sup>Required</sup> <a name="tagged_addresses" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.taggedAddresses"></a>

```python
tagged_addresses: StringMap
```

- *Type:* cdktf.StringMap

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.telemetry"></a>

```python
telemetry: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tls_ca_file`<sup>Required</sup> <a name="tls_ca_file" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCaFile"></a>

```python
tls_ca_file: str
```

- *Type:* str

---

##### `tls_cert_file`<sup>Required</sup> <a name="tls_cert_file" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsCertFile"></a>

```python
tls_cert_file: str
```

- *Type:* str

---

##### `tls_key_file`<sup>Required</sup> <a name="tls_key_file" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsKeyFile"></a>

```python
tls_key_file: str
```

- *Type:* str

---

##### `tls_min_version`<sup>Required</sup> <a name="tls_min_version" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsMinVersion"></a>

```python
tls_min_version: str
```

- *Type:* str

---

##### `tls_verify_incoming`<sup>Required</sup> <a name="tls_verify_incoming" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyIncoming"></a>

```python
tls_verify_incoming: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tls_verify_outgoing`<sup>Required</sup> <a name="tls_verify_outgoing" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyOutgoing"></a>

```python
tls_verify_outgoing: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tls_verify_server_hostname`<sup>Required</sup> <a name="tls_verify_server_hostname" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tlsVerifyServerHostname"></a>

```python
tls_verify_server_hostname: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `translate_wan_addrs`<sup>Required</sup> <a name="translate_wan_addrs" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.translateWanAddrs"></a>

```python
translate_wan_addrs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ui_dir`<sup>Required</sup> <a name="ui_dir" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.uiDir"></a>

```python
ui_dir: str
```

- *Type:* str

---

##### `unix_sockets`<sup>Required</sup> <a name="unix_sockets" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.unixSockets"></a>

```python
unix_sockets: StringMap
```

- *Type:* cdktf.StringMap

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_prerelease`<sup>Required</sup> <a name="version_prerelease" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionPrerelease"></a>

```python
version_prerelease: str
```

- *Type:* str

---

##### `version_revision`<sup>Required</sup> <a name="version_revision" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.versionRevision"></a>

```python
version_revision: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelf.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAgentSelfConfig <a name="DataConsulAgentSelfConfig" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_agent_self

dataConsulAgentSelf.DataConsulAgentSelfConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAgentSelf.DataConsulAgentSelfConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---



