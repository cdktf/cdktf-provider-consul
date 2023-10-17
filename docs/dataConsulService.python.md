# `data_consul_service`

Refer to the Terraform Registory for docs: [`data_consul_service`](https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service).

# `dataConsulService` Submodule <a name="`dataConsulService` Submodule" id="@cdktf/provider-consul.dataConsulService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulService <a name="DataConsulService" id="@cdktf/provider-consul.dataConsulService.DataConsulService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service consul_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulService(
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
  datacenter: str = None,
  filter: str = None,
  id: str = None,
  query_options: typing.Union[IResolvable, typing.List[DataConsulServiceQueryOptions]] = None,
  tag: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#name DataConsulService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#datacenter DataConsulService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#filter DataConsulService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#id DataConsulService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.queryOptions">query_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]</code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#tag DataConsulService#tag}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#name DataConsulService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.datacenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#datacenter DataConsulService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#filter DataConsulService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#id DataConsulService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.queryOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#query_options DataConsulService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#tag DataConsulService#tag}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.putQueryOptions">put_query_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetQueryOptions">reset_query_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetTag">reset_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulService.DataConsulService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulService.DataConsulService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulService.DataConsulService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_query_options` <a name="put_query_options" id="@cdktf/provider-consul.dataConsulService.DataConsulService.putQueryOptions"></a>

```python
def put_query_options(
  value: typing.Union[IResolvable, typing.List[DataConsulServiceQueryOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulService.DataConsulService.putQueryOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]

---

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query_options` <a name="reset_query_options" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetQueryOptions"></a>

```python
def reset_query_options() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetTag"></a>

```python
def reset_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataConsulService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataConsulService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataConsulService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataConsulService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptions">query_options</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList">DataConsulServiceQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.service">service</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList">DataConsulServiceServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptionsInput">query_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.tag">tag</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptions"></a>

```python
query_options: DataConsulServiceQueryOptionsList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList">DataConsulServiceQueryOptionsList</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.service"></a>

```python
service: DataConsulServiceServiceList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList">DataConsulServiceServiceList</a>

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_options_input`<sup>Optional</sup> <a name="query_options_input" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptionsInput"></a>

```python
query_options_input: typing.Union[IResolvable, typing.List[DataConsulServiceQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulServiceConfig <a name="DataConsulServiceConfig" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  datacenter: str = None,
  filter: str = None,
  id: str = None,
  query_options: typing.Union[IResolvable, typing.List[DataConsulServiceQueryOptions]] = None,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#name DataConsulService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#datacenter DataConsulService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#filter DataConsulService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#id DataConsulService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.queryOptions">query_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]</code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#tag DataConsulService#tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#name DataConsulService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#datacenter DataConsulService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#filter DataConsulService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#id DataConsulService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.queryOptions"></a>

```python
query_options: typing.Union[IResolvable, typing.List[DataConsulServiceQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#query_options DataConsulService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#tag DataConsulService#tag}.

---

### DataConsulServiceQueryOptions <a name="DataConsulServiceQueryOptions" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulServiceQueryOptions(
  allow_stale: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
  namespace: str = None,
  near: str = None,
  node_meta: typing.Mapping[str] = None,
  partition: str = None,
  require_consistent: typing.Union[bool, IResolvable] = None,
  token: str = None,
  wait_index: typing.Union[int, float] = None,
  wait_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.allowStale">allow_stale</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#allow_stale DataConsulService#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#datacenter DataConsulService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#namespace DataConsulService#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.near">near</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#near DataConsulService#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#node_meta DataConsulService#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#partition DataConsulService#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.requireConsistent">require_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#require_consistent DataConsulService#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#token DataConsulService#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#wait_index DataConsulService#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitTime">wait_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#wait_time DataConsulService#wait_time}. |

---

##### `allow_stale`<sup>Optional</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.allowStale"></a>

```python
allow_stale: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#allow_stale DataConsulService#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#datacenter DataConsulService#datacenter}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#namespace DataConsulService#namespace}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.near"></a>

```python
near: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#near DataConsulService#near}.

---

##### `node_meta`<sup>Optional</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#node_meta DataConsulService#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.partition"></a>

```python
partition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#partition DataConsulService#partition}.

---

##### `require_consistent`<sup>Optional</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.requireConsistent"></a>

```python
require_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#require_consistent DataConsulService#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#token DataConsulService#token}.

---

##### `wait_index`<sup>Optional</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#wait_index DataConsulService#wait_index}.

---

##### `wait_time`<sup>Optional</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/service#wait_time DataConsulService#wait_time}.

---

### DataConsulServiceService <a name="DataConsulServiceService" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceService.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulServiceService()
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulServiceQueryOptionsList <a name="DataConsulServiceQueryOptionsList" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulServiceQueryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulServiceQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataConsulServiceQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]]

---


### DataConsulServiceQueryOptionsOutputReference <a name="DataConsulServiceQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulServiceQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetAllowStale">reset_allow_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNear">reset_near</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNodeMeta">reset_node_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetRequireConsistent">reset_require_consistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitIndex">reset_wait_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitTime">reset_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_stale` <a name="reset_allow_stale" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetAllowStale"></a>

```python
def reset_allow_stale() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_near` <a name="reset_near" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNear"></a>

```python
def reset_near() -> None
```

##### `reset_node_meta` <a name="reset_node_meta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNodeMeta"></a>

```python
def reset_node_meta() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_require_consistent` <a name="reset_require_consistent" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetRequireConsistent"></a>

```python
def reset_require_consistent() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_wait_index` <a name="reset_wait_index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitIndex"></a>

```python
def reset_wait_index() -> None
```

##### `reset_wait_time` <a name="reset_wait_time" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitTime"></a>

```python
def reset_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStaleInput">allow_stale_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nearInput">near_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMetaInput">node_meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistentInput">require_consistent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndexInput">wait_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTimeInput">wait_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStale">allow_stale</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.near">near</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistent">require_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTime">wait_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_stale_input`<sup>Optional</sup> <a name="allow_stale_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStaleInput"></a>

```python
allow_stale_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `near_input`<sup>Optional</sup> <a name="near_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nearInput"></a>

```python
near_input: str
```

- *Type:* str

---

##### `node_meta_input`<sup>Optional</sup> <a name="node_meta_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMetaInput"></a>

```python
node_meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `require_consistent_input`<sup>Optional</sup> <a name="require_consistent_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistentInput"></a>

```python
require_consistent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `wait_index_input`<sup>Optional</sup> <a name="wait_index_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndexInput"></a>

```python
wait_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_input`<sup>Optional</sup> <a name="wait_time_input" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTimeInput"></a>

```python
wait_time_input: str
```

- *Type:* str

---

##### `allow_stale`<sup>Required</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStale"></a>

```python
allow_stale: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.near"></a>

```python
near: str
```

- *Type:* str

---

##### `node_meta`<sup>Required</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `require_consistent`<sup>Required</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistent"></a>

```python
require_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `wait_index`<sup>Required</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time`<sup>Required</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataConsulServiceQueryOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>]

---


### DataConsulServiceServiceList <a name="DataConsulServiceServiceList" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulServiceServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulServiceServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataConsulServiceServiceOutputReference <a name="DataConsulServiceServiceOutputReference" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_service

dataConsulService.DataConsulServiceServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.createIndex">create_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.enableTagOverride">enable_tag_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.modifyIndex">modify_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeAddress">node_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeMeta">node_meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.taggedAddresses">tagged_addresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceService">DataConsulServiceService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `create_index`<sup>Required</sup> <a name="create_index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.createIndex"></a>

```python
create_index: str
```

- *Type:* str

---

##### `enable_tag_override`<sup>Required</sup> <a name="enable_tag_override" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.enableTagOverride"></a>

```python
enable_tag_override: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.meta"></a>

```python
meta: StringMap
```

- *Type:* cdktf.StringMap

---

##### `modify_index`<sup>Required</sup> <a name="modify_index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.modifyIndex"></a>

```python
modify_index: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_address`<sup>Required</sup> <a name="node_address" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeAddress"></a>

```python
node_address: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `node_meta`<sup>Required</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeMeta"></a>

```python
node_meta: StringMap
```

- *Type:* cdktf.StringMap

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `tagged_addresses`<sup>Required</sup> <a name="tagged_addresses" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.taggedAddresses"></a>

```python
tagged_addresses: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataConsulServiceService
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceService">DataConsulServiceService</a>

---



