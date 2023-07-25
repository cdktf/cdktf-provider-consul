# `data_consul_catalog_nodes`

Refer to the Terraform Registory for docs: [`data_consul_catalog_nodes`](https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes).

# `dataConsulCatalogNodes` Submodule <a name="`dataConsulCatalogNodes` Submodule" id="@cdktf/provider-consul.dataConsulCatalogNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulCatalogNodes <a name="DataConsulCatalogNodes" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes consul_catalog_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodes(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  query_options: typing.Union[IResolvable, typing.List[DataConsulCatalogNodesQueryOptions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#id DataConsulCatalogNodes#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.queryOptions">query_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]</code> | query_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#id DataConsulCatalogNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.Initializer.parameter.queryOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#query_options DataConsulCatalogNodes#query_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.putQueryOptions">put_query_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetQueryOptions">reset_query_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_query_options` <a name="put_query_options" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.putQueryOptions"></a>

```python
def put_query_options(
  value: typing.Union[IResolvable, typing.List[DataConsulCatalogNodesQueryOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.putQueryOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_query_options` <a name="reset_query_options" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.resetQueryOptions"></a>

```python
def reset_query_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeIds">node_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeNames">node_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList">DataConsulCatalogNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptions">query_options</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList">DataConsulCatalogNodesQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptionsInput">query_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `node_ids`<sup>Required</sup> <a name="node_ids" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeIds"></a>

```python
node_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_names`<sup>Required</sup> <a name="node_names" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodeNames"></a>

```python
node_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.nodes"></a>

```python
nodes: DataConsulCatalogNodesNodesList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList">DataConsulCatalogNodesNodesList</a>

---

##### `query_options`<sup>Required</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptions"></a>

```python
query_options: DataConsulCatalogNodesQueryOptionsList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList">DataConsulCatalogNodesQueryOptionsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `query_options_input`<sup>Optional</sup> <a name="query_options_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.queryOptionsInput"></a>

```python
query_options_input: typing.Union[IResolvable, typing.List[DataConsulCatalogNodesQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulCatalogNodesConfig <a name="DataConsulCatalogNodesConfig" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  query_options: typing.Union[IResolvable, typing.List[DataConsulCatalogNodesQueryOptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#id DataConsulCatalogNodes#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.queryOptions">query_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]</code> | query_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#id DataConsulCatalogNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `query_options`<sup>Optional</sup> <a name="query_options" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesConfig.property.queryOptions"></a>

```python
query_options: typing.Union[IResolvable, typing.List[DataConsulCatalogNodesQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#query_options DataConsulCatalogNodes#query_options}

---

### DataConsulCatalogNodesNodes <a name="DataConsulCatalogNodesNodes" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodesNodes()
```


### DataConsulCatalogNodesQueryOptions <a name="DataConsulCatalogNodesQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions(
  allow_stale: typing.Union[bool, IResolvable] = None,
  datacenter: str = None,
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
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.allowStale">allow_stale</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#allow_stale DataConsulCatalogNodes#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#datacenter DataConsulCatalogNodes#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.near">near</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#near DataConsulCatalogNodes#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#node_meta DataConsulCatalogNodes#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#partition DataConsulCatalogNodes#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.requireConsistent">require_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#require_consistent DataConsulCatalogNodes#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#token DataConsulCatalogNodes#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#wait_index DataConsulCatalogNodes#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitTime">wait_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#wait_time DataConsulCatalogNodes#wait_time}. |

---

##### `allow_stale`<sup>Optional</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.allowStale"></a>

```python
allow_stale: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#allow_stale DataConsulCatalogNodes#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#datacenter DataConsulCatalogNodes#datacenter}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.near"></a>

```python
near: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#near DataConsulCatalogNodes#near}.

---

##### `node_meta`<sup>Optional</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#node_meta DataConsulCatalogNodes#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.partition"></a>

```python
partition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#partition DataConsulCatalogNodes#partition}.

---

##### `require_consistent`<sup>Optional</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.requireConsistent"></a>

```python
require_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#require_consistent DataConsulCatalogNodes#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#token DataConsulCatalogNodes#token}.

---

##### `wait_index`<sup>Optional</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#wait_index DataConsulCatalogNodes#wait_index}.

---

##### `wait_time`<sup>Optional</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/catalog_nodes#wait_time DataConsulCatalogNodes#wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulCatalogNodesNodesList <a name="DataConsulCatalogNodesNodesList" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodesNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulCatalogNodesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataConsulCatalogNodesNodesOutputReference <a name="DataConsulCatalogNodesNodesOutputReference" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.meta">meta</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.taggedAddresses">tagged_addresses</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes">DataConsulCatalogNodesNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.meta"></a>

```python
meta: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tagged_addresses`<sup>Required</sup> <a name="tagged_addresses" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.taggedAddresses"></a>

```python
tagged_addresses: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataConsulCatalogNodesNodes
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesNodes">DataConsulCatalogNodesNodes</a>

---


### DataConsulCatalogNodesQueryOptionsList <a name="DataConsulCatalogNodesQueryOptionsList" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulCatalogNodesQueryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataConsulCatalogNodesQueryOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]]

---


### DataConsulCatalogNodesQueryOptionsOutputReference <a name="DataConsulCatalogNodesQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_catalog_nodes

dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetAllowStale">reset_allow_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNear">reset_near</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNodeMeta">reset_node_meta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetRequireConsistent">reset_require_consistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitIndex">reset_wait_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitTime">reset_wait_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_stale` <a name="reset_allow_stale" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetAllowStale"></a>

```python
def reset_allow_stale() -> None
```

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_near` <a name="reset_near" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNear"></a>

```python
def reset_near() -> None
```

##### `reset_node_meta` <a name="reset_node_meta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetNodeMeta"></a>

```python
def reset_node_meta() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_require_consistent` <a name="reset_require_consistent" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetRequireConsistent"></a>

```python
def reset_require_consistent() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_wait_index` <a name="reset_wait_index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitIndex"></a>

```python
def reset_wait_index() -> None
```

##### `reset_wait_time` <a name="reset_wait_time" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.resetWaitTime"></a>

```python
def reset_wait_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStaleInput">allow_stale_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nearInput">near_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMetaInput">node_meta_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistentInput">require_consistent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndexInput">wait_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTimeInput">wait_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStale">allow_stale</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.near">near</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMeta">node_meta</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistent">require_consistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndex">wait_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTime">wait_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_stale_input`<sup>Optional</sup> <a name="allow_stale_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStaleInput"></a>

```python
allow_stale_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `near_input`<sup>Optional</sup> <a name="near_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nearInput"></a>

```python
near_input: str
```

- *Type:* str

---

##### `node_meta_input`<sup>Optional</sup> <a name="node_meta_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMetaInput"></a>

```python
node_meta_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `require_consistent_input`<sup>Optional</sup> <a name="require_consistent_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistentInput"></a>

```python
require_consistent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `wait_index_input`<sup>Optional</sup> <a name="wait_index_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndexInput"></a>

```python
wait_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_input`<sup>Optional</sup> <a name="wait_time_input" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTimeInput"></a>

```python
wait_time_input: str
```

- *Type:* str

---

##### `allow_stale`<sup>Required</sup> <a name="allow_stale" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.allowStale"></a>

```python
allow_stale: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.near"></a>

```python
near: str
```

- *Type:* str

---

##### `node_meta`<sup>Required</sup> <a name="node_meta" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.nodeMeta"></a>

```python
node_meta: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `require_consistent`<sup>Required</sup> <a name="require_consistent" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.requireConsistent"></a>

```python
require_consistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `wait_index`<sup>Required</sup> <a name="wait_index" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitIndex"></a>

```python
wait_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time`<sup>Required</sup> <a name="wait_time" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.waitTime"></a>

```python
wait_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataConsulCatalogNodesQueryOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulCatalogNodes.DataConsulCatalogNodesQueryOptions">DataConsulCatalogNodesQueryOptions</a>]

---



