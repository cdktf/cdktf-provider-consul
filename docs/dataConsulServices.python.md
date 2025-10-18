# `dataConsulServices` Submodule <a name="`dataConsulServices` Submodule" id="@cdktf/provider-consul.dataConsulServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulServices <a name="DataConsulServices" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services consul_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServices(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  query_options: IResolvable | typing.List[DataConsulServicesQueryOptions] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#id DataConsulServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.queryOptions">query_options</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]</code> | query_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#id DataConsulServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.Initializer.parameter.queryOptions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#query_options DataConsulServices#query_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.putQueryOptions">put_query_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.resetQueryOptions">reset_query_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_query_options` <a name="put_query_options" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.putQueryOptions"></a>

```python
def put_query_options(
  value: IResolvable | typing.List[DataConsulServicesQueryOptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.putQueryOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query_options` <a name="reset_query_options" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.resetQueryOptions"></a>

```python
def reset_query_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataConsulServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataConsulServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataConsulServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataConsulServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.names">names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.queryOptions">query_options</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList">DataConsulServicesQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.services">services</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.queryOptionsInput">query_options_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.queryOptions"></a>

```python
query_options: DataConsulServicesQueryOptionsList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList">DataConsulServicesQueryOptionsList</a>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.services"></a>

```python
services: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `query_options_input`<sup>Optional</sup> <a name="query_options_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.queryOptionsInput"></a>

```python
query_options_input: IResolvable | typing.List[DataConsulServicesQueryOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulServices.DataConsulServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulServicesConfig <a name="DataConsulServicesConfig" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServicesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  query_options: IResolvable | typing.List[DataConsulServicesQueryOptions] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#id DataConsulServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.queryOptions">query_options</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]</code> | query_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#id DataConsulServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesConfig.property.queryOptions"></a>

```python
query_options: IResolvable | typing.List[DataConsulServicesQueryOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#query_options DataConsulServices#query_options}

---

### DataConsulServicesQueryOptions <a name="DataConsulServicesQueryOptions" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServicesQueryOptions(
  allow_stale: bool | IResolvable = None,
  datacenter: str = None,
  namespace: str = None,
  near: str = None,
  node_meta: typing.Mapping[str] = None,
  partition: str = None,
  require_consistent: bool | IResolvable = None,
  token: str = None,
  wait_index: typing.Union[int, float] = None,
  wait_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.allowStale">allow_stale</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#allow_stale DataConsulServices#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#datacenter DataConsulServices#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#namespace DataConsulServices#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.near">near</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#near DataConsulServices#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#node_meta DataConsulServices#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#partition DataConsulServices#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.requireConsistent">require_consistent</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#require_consistent DataConsulServices#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#token DataConsulServices#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#wait_index DataConsulServices#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.waitTime">wait_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#wait_time DataConsulServices#wait_time}. |

---

##### `allow_stale`<sup>Optional</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.allowStale"></a>

```python
allow_stale: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#allow_stale DataConsulServices#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#datacenter DataConsulServices#datacenter}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#namespace DataConsulServices#namespace}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.near"></a>

```python
near: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#near DataConsulServices#near}.

---

##### `node_meta`<sup>Optional</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#node_meta DataConsulServices#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.partition"></a>

```python
partition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#partition DataConsulServices#partition}.

---

##### `require_consistent`<sup>Optional</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.requireConsistent"></a>

```python
require_consistent: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#require_consistent DataConsulServices#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#token DataConsulServices#token}.

---

##### `wait_index`<sup>Optional</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#wait_index DataConsulServices#wait_index}.

---

##### `wait_time`<sup>Optional</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/services#wait_time DataConsulServices#wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulServicesQueryOptionsList <a name="DataConsulServicesQueryOptionsList" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServicesQueryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulServicesQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataConsulServicesQueryOptions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>]

---


### DataConsulServicesQueryOptionsOutputReference <a name="DataConsulServicesQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_services

dataConsulServices.DataConsulServicesQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetAllowStale">reset_allow_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetNear">reset_near</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetNodeMeta">reset_node_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetRequireConsistent">reset_require_consistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetWaitIndex">reset_wait_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetWaitTime">reset_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_stale` <a name="reset_allow_stale" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetAllowStale"></a>

```python
def reset_allow_stale() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_near` <a name="reset_near" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetNear"></a>

```python
def reset_near() -> None
```

##### `reset_node_meta` <a name="reset_node_meta" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetNodeMeta"></a>

```python
def reset_node_meta() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_require_consistent` <a name="reset_require_consistent" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetRequireConsistent"></a>

```python
def reset_require_consistent() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_wait_index` <a name="reset_wait_index" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetWaitIndex"></a>

```python
def reset_wait_index() -> None
```

##### `reset_wait_time` <a name="reset_wait_time" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.resetWaitTime"></a>

```python
def reset_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.allowStaleInput">allow_stale_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.nearInput">near_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.nodeMetaInput">node_meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.requireConsistentInput">require_consistent_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitIndexInput">wait_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitTimeInput">wait_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.allowStale">allow_stale</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.near">near</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.requireConsistent">require_consistent</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitTime">wait_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_stale_input`<sup>Optional</sup> <a name="allow_stale_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.allowStaleInput"></a>

```python
allow_stale_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `near_input`<sup>Optional</sup> <a name="near_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.nearInput"></a>

```python
near_input: str
```

- *Type:* str

---

##### `node_meta_input`<sup>Optional</sup> <a name="node_meta_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.nodeMetaInput"></a>

```python
node_meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `require_consistent_input`<sup>Optional</sup> <a name="require_consistent_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.requireConsistentInput"></a>

```python
require_consistent_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `wait_index_input`<sup>Optional</sup> <a name="wait_index_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitIndexInput"></a>

```python
wait_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_input`<sup>Optional</sup> <a name="wait_time_input" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitTimeInput"></a>

```python
wait_time_input: str
```

- *Type:* str

---

##### `allow_stale`<sup>Required</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.allowStale"></a>

```python
allow_stale: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.near"></a>

```python
near: str
```

- *Type:* str

---

##### `node_meta`<sup>Required</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `require_consistent`<sup>Required</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.requireConsistent"></a>

```python
require_consistent: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `wait_index`<sup>Required</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time`<sup>Required</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataConsulServicesQueryOptions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.dataConsulServices.DataConsulServicesQueryOptions">DataConsulServicesQueryOptions</a>

---



