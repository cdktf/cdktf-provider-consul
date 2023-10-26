# `data_consul_key_prefix`

Refer to the Terraform Registory for docs: [`data_consul_key_prefix`](https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix).

# `dataConsulKeyPrefix` Submodule <a name="`dataConsulKeyPrefix` Submodule" id="@cdktf/provider-consul.dataConsulKeyPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulKeyPrefix <a name="DataConsulKeyPrefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix consul_key_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefix(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path_prefix: str,
  datacenter: str = None,
  id: str = None,
  namespace: str = None,
  partition: str = None,
  subkey: typing.Union[IResolvable, typing.List[DataConsulKeyPrefixSubkey]] = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.pathPrefix">path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.subkey">subkey</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]</code> | subkey block. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.pathPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.datacenter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.partition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}.

---

##### `subkey`<sup>Optional</sup> <a name="subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.subkey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]

subkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#subkey DataConsulKeyPrefix#subkey}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.putSubkey">put_subkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetDatacenter">reset_datacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetSubkey">reset_subkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_subkey` <a name="put_subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.putSubkey"></a>

```python
def put_subkey(
  value: typing.Union[IResolvable, typing.List[DataConsulKeyPrefixSubkey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.putSubkey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]

---

##### `reset_datacenter` <a name="reset_datacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetDatacenter"></a>

```python
def reset_datacenter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_subkey` <a name="reset_subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetSubkey"></a>

```python
def reset_subkey() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataConsulKeyPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefix.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefix.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefix.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefix.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataConsulKeyPrefix resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataConsulKeyPrefix to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataConsulKeyPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulKeyPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkey">subkey</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList">DataConsulKeyPrefixSubkeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeys">subkeys</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.var">var</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeyInput">subkey_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `subkey`<sup>Required</sup> <a name="subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkey"></a>

```python
subkey: DataConsulKeyPrefixSubkeyList
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList">DataConsulKeyPrefixSubkeyList</a>

---

##### `subkeys`<sup>Required</sup> <a name="subkeys" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeys"></a>

```python
subkeys: StringMap
```

- *Type:* cdktf.StringMap

---

##### `var`<sup>Required</sup> <a name="var" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.var"></a>

```python
var: StringMap
```

- *Type:* cdktf.StringMap

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `subkey_input`<sup>Optional</sup> <a name="subkey_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeyInput"></a>

```python
subkey_input: typing.Union[IResolvable, typing.List[DataConsulKeyPrefixSubkey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulKeyPrefixConfig <a name="DataConsulKeyPrefixConfig" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefixConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  path_prefix: str,
  datacenter: str = None,
  id: str = None,
  namespace: str = None,
  partition: str = None,
  subkey: typing.Union[IResolvable, typing.List[DataConsulKeyPrefixSubkey]] = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.pathPrefix">path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.datacenter">datacenter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.partition">partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.subkey">subkey</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]</code> | subkey block. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}.

---

##### `subkey`<sup>Optional</sup> <a name="subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.subkey"></a>

```python
subkey: typing.Union[IResolvable, typing.List[DataConsulKeyPrefixSubkey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]

subkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#subkey DataConsulKeyPrefix#subkey}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}.

---

### DataConsulKeyPrefixSubkey <a name="DataConsulKeyPrefixSubkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefixSubkey(
  name: str,
  path: str,
  default: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#name DataConsulKeyPrefix#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#path DataConsulKeyPrefix#path}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#default DataConsulKeyPrefix#default}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#name DataConsulKeyPrefix#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#path DataConsulKeyPrefix#path}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.19.0/docs/data-sources/key_prefix#default DataConsulKeyPrefix#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulKeyPrefixSubkeyList <a name="DataConsulKeyPrefixSubkeyList" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataConsulKeyPrefixSubkeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataConsulKeyPrefixSubkey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]]

---


### DataConsulKeyPrefixSubkeyOutputReference <a name="DataConsulKeyPrefixSubkeyOutputReference" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import data_consul_key_prefix

dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataConsulKeyPrefixSubkey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>]

---



