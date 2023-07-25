# `data_consul_acl_auth_method`

Refer to the Terraform Registory for docs: [`data_consul_acl_auth_method`](https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method).

# `dataConsulAclAuthMethod` Submodule <a name="`dataConsulAclAuthMethod` Submodule" id="@cdktf/provider-consul.dataConsulAclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAclAuthMethod <a name="DataConsulAclAuthMethod" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method consul_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethod(
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
  namespace: str = None,
  partition: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#name DataConsulAclAuthMethod#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#id DataConsulAclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#namespace DataConsulAclAuthMethod#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#partition DataConsulAclAuthMethod#partition}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#name DataConsulAclAuthMethod#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#id DataConsulAclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#namespace DataConsulAclAuthMethod#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.Initializer.parameter.partition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#partition DataConsulAclAuthMethod#partition}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetPartition">reset_partition</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.resetPartition"></a>

```python
def reset_partition() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethod.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.config">config</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.configJson">config_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.maxTokenTtl">max_token_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceRule">namespace_rule</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList">DataConsulAclAuthMethodNamespaceRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tokenLocality">token_locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partition">partition</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.config"></a>

```python
config: StringMap
```

- *Type:* cdktf.StringMap

---

##### `config_json`<sup>Required</sup> <a name="config_json" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.configJson"></a>

```python
config_json: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `max_token_ttl`<sup>Required</sup> <a name="max_token_ttl" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.maxTokenTtl"></a>

```python
max_token_ttl: str
```

- *Type:* str

---

##### `namespace_rule`<sup>Required</sup> <a name="namespace_rule" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceRule"></a>

```python
namespace_rule: DataConsulAclAuthMethodNamespaceRuleList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList">DataConsulAclAuthMethodNamespaceRuleList</a>

---

##### `token_locality`<sup>Required</sup> <a name="token_locality" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tokenLocality"></a>

```python
token_locality: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAclAuthMethodConfig <a name="DataConsulAclAuthMethodConfig" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  namespace: str = None,
  partition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#name DataConsulAclAuthMethod#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#id DataConsulAclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#namespace DataConsulAclAuthMethod#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#partition DataConsulAclAuthMethod#partition}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#name DataConsulAclAuthMethod#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#id DataConsulAclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#namespace DataConsulAclAuthMethod#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.18.0/docs/data-sources/acl_auth_method#partition DataConsulAclAuthMethod#partition}.

---

### DataConsulAclAuthMethodNamespaceRule <a name="DataConsulAclAuthMethodNamespaceRule" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulAclAuthMethodNamespaceRuleList <a name="DataConsulAclAuthMethodNamespaceRuleList" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulAclAuthMethodNamespaceRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataConsulAclAuthMethodNamespaceRuleOutputReference <a name="DataConsulAclAuthMethodNamespaceRuleOutputReference" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_acl_auth_method

dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.bindNamespace">bind_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule">DataConsulAclAuthMethodNamespaceRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bind_namespace`<sup>Required</sup> <a name="bind_namespace" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.bindNamespace"></a>

```python
bind_namespace: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataConsulAclAuthMethodNamespaceRule
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclAuthMethod.DataConsulAclAuthMethodNamespaceRule">DataConsulAclAuthMethodNamespaceRule</a>

---



