# `dataConsulCatalogService` Submodule <a name="`dataConsulCatalogService` Submodule" id="@cdktf/provider-consul.dataConsulCatalogService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulCatalogService <a name="DataConsulCatalogService" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service consul_catalog_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogService(
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
  query_options: typing.Union[IResolvable, typing.List[DataConsulCatalogServiceQueryOptions]] = None,
  tag: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.queryOptions">query_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]</code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.datacenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.queryOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#query_options DataConsulCatalogService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.tag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions">put_query_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetQueryOptions">reset_query_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetTag">reset_tag</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_query_options` <a name="put_query_options" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions"></a>

```python
def put_query_options(
  value: typing.Union[IResolvable, typing.List[DataConsulCatalogServiceQueryOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]

---

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query_options` <a name="reset_query_options" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetQueryOptions"></a>

```python
def reset_query_options() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetTag"></a>

```python
def reset_tag() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataConsulCatalogService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataConsulCatalogService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataConsulCatalogService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataConsulCatalogService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulCatalogService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptions">query_options</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList">DataConsulCatalogServiceQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.service">service</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList">DataConsulCatalogServiceServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptionsInput">query_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tag">tag</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptions"></a>

```python
query_options: DataConsulCatalogServiceQueryOptionsList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList">DataConsulCatalogServiceQueryOptionsList</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.service"></a>

```python
service: DataConsulCatalogServiceServiceList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList">DataConsulCatalogServiceServiceList</a>

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_options_input`<sup>Optional</sup> <a name="query_options_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptionsInput"></a>

```python
query_options_input: typing.Union[IResolvable, typing.List[DataConsulCatalogServiceQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulCatalogServiceConfig <a name="DataConsulCatalogServiceConfig" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogServiceConfig(
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
  query_options: typing.Union[IResolvable, typing.List[DataConsulCatalogServiceQueryOptions]] = None,
  tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.queryOptions">query_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]</code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.tag">tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.queryOptions"></a>

```python
query_options: typing.Union[IResolvable, typing.List[DataConsulCatalogServiceQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#query_options DataConsulCatalogService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.tag"></a>

```python
tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}.

---

### DataConsulCatalogServiceQueryOptions <a name="DataConsulCatalogServiceQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogServiceQueryOptions(
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
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.allowStale">allow_stale</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#allow_stale DataConsulCatalogService#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#namespace DataConsulCatalogService#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.near">near</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#near DataConsulCatalogService#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#node_meta DataConsulCatalogService#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#partition DataConsulCatalogService#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.requireConsistent">require_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#require_consistent DataConsulCatalogService#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#token DataConsulCatalogService#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_index DataConsulCatalogService#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitTime">wait_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_time DataConsulCatalogService#wait_time}. |

---

##### `allow_stale`<sup>Optional</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.allowStale"></a>

```python
allow_stale: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#allow_stale DataConsulCatalogService#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#namespace DataConsulCatalogService#namespace}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.near"></a>

```python
near: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#near DataConsulCatalogService#near}.

---

##### `node_meta`<sup>Optional</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#node_meta DataConsulCatalogService#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.partition"></a>

```python
partition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#partition DataConsulCatalogService#partition}.

---

##### `require_consistent`<sup>Optional</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.requireConsistent"></a>

```python
require_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#require_consistent DataConsulCatalogService#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#token DataConsulCatalogService#token}.

---

##### `wait_index`<sup>Optional</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_index DataConsulCatalogService#wait_index}.

---

##### `wait_time`<sup>Optional</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_time DataConsulCatalogService#wait_time}.

---

### DataConsulCatalogServiceService <a name="DataConsulCatalogServiceService" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogServiceService()
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulCatalogServiceQueryOptionsList <a name="DataConsulCatalogServiceQueryOptionsList" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulCatalogServiceQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataConsulCatalogServiceQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]]

---


### DataConsulCatalogServiceQueryOptionsOutputReference <a name="DataConsulCatalogServiceQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetAllowStale">reset_allow_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNear">reset_near</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNodeMeta">reset_node_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetRequireConsistent">reset_require_consistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitIndex">reset_wait_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitTime">reset_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_stale` <a name="reset_allow_stale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetAllowStale"></a>

```python
def reset_allow_stale() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_near` <a name="reset_near" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNear"></a>

```python
def reset_near() -> None
```

##### `reset_node_meta` <a name="reset_node_meta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNodeMeta"></a>

```python
def reset_node_meta() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_require_consistent` <a name="reset_require_consistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetRequireConsistent"></a>

```python
def reset_require_consistent() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_wait_index` <a name="reset_wait_index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitIndex"></a>

```python
def reset_wait_index() -> None
```

##### `reset_wait_time` <a name="reset_wait_time" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitTime"></a>

```python
def reset_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStaleInput">allow_stale_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nearInput">near_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMetaInput">node_meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistentInput">require_consistent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndexInput">wait_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTimeInput">wait_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStale">allow_stale</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.near">near</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistent">require_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTime">wait_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_stale_input`<sup>Optional</sup> <a name="allow_stale_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStaleInput"></a>

```python
allow_stale_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `near_input`<sup>Optional</sup> <a name="near_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nearInput"></a>

```python
near_input: str
```

- *Type:* str

---

##### `node_meta_input`<sup>Optional</sup> <a name="node_meta_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMetaInput"></a>

```python
node_meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `require_consistent_input`<sup>Optional</sup> <a name="require_consistent_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistentInput"></a>

```python
require_consistent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `wait_index_input`<sup>Optional</sup> <a name="wait_index_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndexInput"></a>

```python
wait_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_input`<sup>Optional</sup> <a name="wait_time_input" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTimeInput"></a>

```python
wait_time_input: str
```

- *Type:* str

---

##### `allow_stale`<sup>Required</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStale"></a>

```python
allow_stale: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.near"></a>

```python
near: str
```

- *Type:* str

---

##### `node_meta`<sup>Required</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `require_consistent`<sup>Required</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistent"></a>

```python
require_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `wait_index`<sup>Required</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time`<sup>Required</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataConsulCatalogServiceQueryOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>]

---


### DataConsulCatalogServiceServiceList <a name="DataConsulCatalogServiceServiceList" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogServiceServiceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulCatalogServiceServiceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataConsulCatalogServiceServiceOutputReference <a name="DataConsulCatalogServiceServiceOutputReference" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_service

dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.createIndex">create_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.enableTagOverride">enable_tag_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.modifyIndex">modify_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeAddress">node_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeMeta">node_meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.taggedAddresses">tagged_addresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService">DataConsulCatalogServiceService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `create_index`<sup>Required</sup> <a name="create_index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.createIndex"></a>

```python
create_index: str
```

- *Type:* str

---

##### `enable_tag_override`<sup>Required</sup> <a name="enable_tag_override" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.enableTagOverride"></a>

```python
enable_tag_override: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.meta"></a>

```python
meta: StringMap
```

- *Type:* cdktf.StringMap

---

##### `modify_index`<sup>Required</sup> <a name="modify_index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.modifyIndex"></a>

```python
modify_index: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_address`<sup>Required</sup> <a name="node_address" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeAddress"></a>

```python
node_address: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `node_meta`<sup>Required</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeMeta"></a>

```python
node_meta: StringMap
```

- *Type:* cdktf.StringMap

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `tagged_addresses`<sup>Required</sup> <a name="tagged_addresses" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.taggedAddresses"></a>

```python
tagged_addresses: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.internalValue"></a>

```python
internal_value: DataConsulCatalogServiceService
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService">DataConsulCatalogServiceService</a>

---



