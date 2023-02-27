# `aclToken` Submodule <a name="`aclToken` Submodule" id="@cdktf/provider-consul.aclToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclToken <a name="AclToken" id="@cdktf/provider-consul.aclToken.AclToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul/r/acl_token consul_acl_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclToken.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accessor_id: str = None,
  description: str = None,
  expiration_time: str = None,
  id: str = None,
  local: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  node_identities: typing.Union[IResolvable, typing.List[AclTokenNodeIdentities]] = None,
  partition: str = None,
  policies: typing.List[str] = None,
  roles: typing.List[str] = None,
  service_identities: typing.Union[IResolvable, typing.List[AclTokenServiceIdentities]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.accessorId">accessor_id</a></code> | <code>str</code> | The token id. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.description">description</a></code> | <code>str</code> | The token description. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.expirationTime">expiration_time</a></code> | <code>str</code> | If set this represents the point after which a token should be considered revoked and is eligible for destruction. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#id AclToken#id}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to set the token local to the current datacenter. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#namespace AclToken#namespace}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.nodeIdentities">node_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]</code> | node_identities block. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.partition">partition</a></code> | <code>str</code> | The partition the ACL token is associated with. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | List of policies. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.serviceIdentities">service_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]</code> | service_identities block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor_id`<sup>Optional</sup> <a name="accessor_id" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.accessorId"></a>

- *Type:* str

The token id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#accessor_id AclToken#accessor_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.description"></a>

- *Type:* str

The token description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#description AclToken#description}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.expirationTime"></a>

- *Type:* str

If set this represents the point after which a token should be considered revoked and is eligible for destruction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#expiration_time AclToken#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#id AclToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.local"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to set the token local to the current datacenter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#local AclToken#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#namespace AclToken#namespace}.

---

##### `node_identities`<sup>Optional</sup> <a name="node_identities" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.nodeIdentities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]

node_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#node_identities AclToken#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.partition"></a>

- *Type:* str

The partition the ACL token is associated with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#partition AclToken#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

List of policies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#policies AclToken#policies}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

List of roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#roles AclToken#roles}

---

##### `service_identities`<sup>Optional</sup> <a name="service_identities" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.serviceIdentities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]

service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#service_identities AclToken#service_identities}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities">put_node_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities">put_service_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetAccessorId">reset_accessor_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetExpirationTime">reset_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetNodeIdentities">reset_node_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetServiceIdentities">reset_service_identities</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclToken.AclToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.aclToken.AclToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclToken.AclToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.aclToken.AclToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.aclToken.AclToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.aclToken.AclToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_node_identities` <a name="put_node_identities" id="@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities"></a>

```python
def put_node_identities(
  value: typing.Union[IResolvable, typing.List[AclTokenNodeIdentities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]

---

##### `put_service_identities` <a name="put_service_identities" id="@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities"></a>

```python
def put_service_identities(
  value: typing.Union[IResolvable, typing.List[AclTokenServiceIdentities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]

---

##### `reset_accessor_id` <a name="reset_accessor_id" id="@cdktf/provider-consul.aclToken.AclToken.resetAccessorId"></a>

```python
def reset_accessor_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-consul.aclToken.AclToken.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expiration_time` <a name="reset_expiration_time" id="@cdktf/provider-consul.aclToken.AclToken.resetExpirationTime"></a>

```python
def reset_expiration_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.aclToken.AclToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-consul.aclToken.AclToken.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.aclToken.AclToken.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_node_identities` <a name="reset_node_identities" id="@cdktf/provider-consul.aclToken.AclToken.resetNodeIdentities"></a>

```python
def reset_node_identities() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.aclToken.AclToken.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-consul.aclToken.AclToken.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktf/provider-consul.aclToken.AclToken.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_service_identities` <a name="reset_service_identities" id="@cdktf/provider-consul.aclToken.AclToken.resetServiceIdentities"></a>

```python
def reset_service_identities() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.aclToken.AclToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclToken.AclToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentities">node_identities</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList">AclTokenNodeIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentities">service_identities</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList">AclTokenServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.accessorIdInput">accessor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.expirationTimeInput">expiration_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.localInput">local_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentitiesInput">node_identities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentitiesInput">service_identities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.accessorId">accessor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclToken.AclToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.aclToken.AclToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.aclToken.AclToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclToken.AclToken.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclToken.AclToken.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclToken.AclToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclToken.AclToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclToken.AclToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclToken.AclToken.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `node_identities`<sup>Required</sup> <a name="node_identities" id="@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentities"></a>

```python
node_identities: AclTokenNodeIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList">AclTokenNodeIdentitiesList</a>

---

##### `service_identities`<sup>Required</sup> <a name="service_identities" id="@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentities"></a>

```python
service_identities: AclTokenServiceIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList">AclTokenServiceIdentitiesList</a>

---

##### `accessor_id_input`<sup>Optional</sup> <a name="accessor_id_input" id="@cdktf/provider-consul.aclToken.AclToken.property.accessorIdInput"></a>

```python
accessor_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-consul.aclToken.AclToken.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expiration_time_input`<sup>Optional</sup> <a name="expiration_time_input" id="@cdktf/provider-consul.aclToken.AclToken.property.expirationTimeInput"></a>

```python
expiration_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.aclToken.AclToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-consul.aclToken.AclToken.property.localInput"></a>

```python
local_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.aclToken.AclToken.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `node_identities_input`<sup>Optional</sup> <a name="node_identities_input" id="@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentitiesInput"></a>

```python
node_identities_input: typing.Union[IResolvable, typing.List[AclTokenNodeIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.aclToken.AclToken.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-consul.aclToken.AclToken.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-consul.aclToken.AclToken.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_identities_input`<sup>Optional</sup> <a name="service_identities_input" id="@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentitiesInput"></a>

```python
service_identities_input: typing.Union[IResolvable, typing.List[AclTokenServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]

---

##### `accessor_id`<sup>Required</sup> <a name="accessor_id" id="@cdktf/provider-consul.aclToken.AclToken.property.accessorId"></a>

```python
accessor_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclToken.AclToken.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-consul.aclToken.AclToken.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-consul.aclToken.AclToken.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclToken.AclToken.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclToken.AclToken.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-consul.aclToken.AclToken.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-consul.aclToken.AclToken.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclToken.AclToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AclTokenConfig <a name="AclTokenConfig" id="@cdktf/provider-consul.aclToken.AclTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accessor_id: str = None,
  description: str = None,
  expiration_time: str = None,
  id: str = None,
  local: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  node_identities: typing.Union[IResolvable, typing.List[AclTokenNodeIdentities]] = None,
  partition: str = None,
  policies: typing.List[str] = None,
  roles: typing.List[str] = None,
  service_identities: typing.Union[IResolvable, typing.List[AclTokenServiceIdentities]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.accessorId">accessor_id</a></code> | <code>str</code> | The token id. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.description">description</a></code> | <code>str</code> | The token description. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.expirationTime">expiration_time</a></code> | <code>str</code> | If set this represents the point after which a token should be considered revoked and is eligible for destruction. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#id AclToken#id}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Flag to set the token local to the current datacenter. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#namespace AclToken#namespace}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.nodeIdentities">node_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]</code> | node_identities block. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.partition">partition</a></code> | <code>str</code> | The partition the ACL token is associated with. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | List of policies. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.serviceIdentities">service_identities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]</code> | service_identities block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor_id`<sup>Optional</sup> <a name="accessor_id" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.accessorId"></a>

```python
accessor_id: str
```

- *Type:* str

The token id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#accessor_id AclToken#accessor_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The token description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#description AclToken#description}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

If set this represents the point after which a token should be considered revoked and is eligible for destruction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#expiration_time AclToken#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#id AclToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Flag to set the token local to the current datacenter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#local AclToken#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#namespace AclToken#namespace}.

---

##### `node_identities`<sup>Optional</sup> <a name="node_identities" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.nodeIdentities"></a>

```python
node_identities: typing.Union[IResolvable, typing.List[AclTokenNodeIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]

node_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#node_identities AclToken#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

The partition the ACL token is associated with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#partition AclToken#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

List of policies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#policies AclToken#policies}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

List of roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#roles AclToken#roles}

---

##### `service_identities`<sup>Optional</sup> <a name="service_identities" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.serviceIdentities"></a>

```python
service_identities: typing.Union[IResolvable, typing.List[AclTokenServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]

service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#service_identities AclToken#service_identities}

---

### AclTokenNodeIdentities <a name="AclTokenNodeIdentities" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclTokenNodeIdentities(
  datacenter: str,
  node_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.datacenter">datacenter</a></code> | <code>str</code> | Specifies the node's datacenter. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.nodeName">node_name</a></code> | <code>str</code> | The name of the node. |

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

Specifies the node's datacenter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#datacenter AclToken#datacenter}

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

The name of the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#node_name AclToken#node_name}

---

### AclTokenServiceIdentities <a name="AclTokenServiceIdentities" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclTokenServiceIdentities(
  service_name: str,
  datacenters: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.serviceName">service_name</a></code> | <code>str</code> | The name of the service. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.datacenters">datacenters</a></code> | <code>typing.List[str]</code> | Specifies the datacenters the effective policy is valid within. |

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#service_name AclToken#service_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.datacenters"></a>

```python
datacenters: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the datacenters the effective policy is valid within.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#datacenters AclToken#datacenters}

---

## Classes <a name="Classes" id="Classes"></a>

### AclTokenNodeIdentitiesList <a name="AclTokenNodeIdentitiesList" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclTokenNodeIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AclTokenNodeIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AclTokenNodeIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>]]

---


### AclTokenNodeIdentitiesOutputReference <a name="AclTokenNodeIdentitiesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclTokenNodeIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenterInput">datacenter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeNameInput">node_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenter">datacenter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenter_input`<sup>Optional</sup> <a name="datacenter_input" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenterInput"></a>

```python
datacenter_input: str
```

- *Type:* str

---

##### `node_name_input`<sup>Optional</sup> <a name="node_name_input" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeNameInput"></a>

```python
node_name_input: str
```

- *Type:* str

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenter"></a>

```python
datacenter: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AclTokenNodeIdentities, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities">AclTokenNodeIdentities</a>, cdktf.IResolvable]

---


### AclTokenServiceIdentitiesList <a name="AclTokenServiceIdentitiesList" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclTokenServiceIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AclTokenServiceIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AclTokenServiceIdentities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>]]

---


### AclTokenServiceIdentitiesOutputReference <a name="AclTokenServiceIdentitiesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_token

aclToken.AclTokenServiceIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resetDatacenters">reset_datacenters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_datacenters` <a name="reset_datacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resetDatacenters"></a>

```python
def reset_datacenters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacentersInput">datacenters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacenters">datacenters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datacenters_input`<sup>Optional</sup> <a name="datacenters_input" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacentersInput"></a>

```python
datacenters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacenters"></a>

```python
datacenters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AclTokenServiceIdentities, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities">AclTokenServiceIdentities</a>, cdktf.IResolvable]

---


