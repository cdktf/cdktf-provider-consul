# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-consul.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method consul_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethod(
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
  type: str,
  config: typing.Mapping[str] = None,
  config_json: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  max_token_ttl: str = None,
  namespace: str = None,
  namespace_rule: IResolvable | typing.List[AclAuthMethodNamespaceRule] = None,
  partition: str = None,
  token_locality: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">config</a></code> | <code>typing.Mapping[str]</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.configJson">config_json</a></code> | <code>str</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.description">description</a></code> | <code>str</code> | A free form human readable description of the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | An optional name to use instead of the name attribute when displaying information about this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.maxTokenTtl">max_token_ttl</a></code> | <code>str</code> | The maximum life of any token created by this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespaceRule">namespace_rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]</code> | namespace_rule block. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.partition">partition</a></code> | <code>str</code> | The partition the ACL auth method is associated with. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenLocality">token_locality</a></code> | <code>str</code> | The kind of token that this auth method produces. This can be either 'local' or 'global'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.name"></a>

- *Type:* str

The name of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.type"></a>

- *Type:* str

The type of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* typing.Mapping[str]

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `config_json`<sup>Optional</sup> <a name="config_json" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.configJson"></a>

- *Type:* str

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config_json AclAuthMethod#config_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.description"></a>

- *Type:* str

A free form human readable description of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#description AclAuthMethod#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.displayName"></a>

- *Type:* str

An optional name to use instead of the name attribute when displaying information about this auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#display_name AclAuthMethod#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_token_ttl`<sup>Optional</sup> <a name="max_token_ttl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.maxTokenTtl"></a>

- *Type:* str

The maximum life of any token created by this auth method.

**This attribute is required and must be set to a nonzero for the OIDC auth method.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace in which to create the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace AclAuthMethod#namespace}

---

##### `namespace_rule`<sup>Optional</sup> <a name="namespace_rule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.namespaceRule"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]

namespace_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace_rule AclAuthMethod#namespace_rule}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.partition"></a>

- *Type:* str

The partition the ACL auth method is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#partition AclAuthMethod#partition}

---

##### `token_locality`<sup>Optional</sup> <a name="token_locality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.tokenLocality"></a>

- *Type:* str

The kind of token that this auth method produces. This can be either 'local' or 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule">put_namespace_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson">reset_config_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl">reset_max_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule">reset_namespace_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality">reset_token_locality</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_namespace_rule` <a name="put_namespace_rule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule"></a>

```python
def put_namespace_rule(
  value: IResolvable | typing.List[AclAuthMethodNamespaceRule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_config_json` <a name="reset_config_json" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson"></a>

```python
def reset_config_json() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_token_ttl` <a name="reset_max_token_ttl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl"></a>

```python
def reset_max_token_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_namespace_rule` <a name="reset_namespace_rule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule"></a>

```python
def reset_namespace_rule() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_token_locality` <a name="reset_token_locality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality"></a>

```python
def reset_token_locality() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethod.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethod.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethod.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethod.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule">namespace_rule</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput">config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput">config_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">max_token_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput">namespace_rule_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">token_locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config">config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson">config_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">max_token_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality">token_locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `namespace_rule`<sup>Required</sup> <a name="namespace_rule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule"></a>

```python
namespace_rule: AclAuthMethodNamespaceRuleList
```

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```python
config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `config_json_input`<sup>Optional</sup> <a name="config_json_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput"></a>

```python
config_json_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_token_ttl_input`<sup>Optional</sup> <a name="max_token_ttl_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```python
max_token_ttl_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `namespace_rule_input`<sup>Optional</sup> <a name="namespace_rule_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput"></a>

```python
namespace_rule_input: IResolvable | typing.List[AclAuthMethodNamespaceRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `token_locality_input`<sup>Optional</sup> <a name="token_locality_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```python
token_locality_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `config_json`<sup>Required</sup> <a name="config_json" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson"></a>

```python
config_json: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_token_ttl`<sup>Required</sup> <a name="max_token_ttl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```python
max_token_ttl: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `token_locality`<sup>Required</sup> <a name="token_locality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```python
token_locality: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethodConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  type: str,
  config: typing.Mapping[str] = None,
  config_json: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  max_token_ttl: str = None,
  namespace: str = None,
  namespace_rule: IResolvable | typing.List[AclAuthMethodNamespaceRule] = None,
  partition: str = None,
  token_locality: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name">name</a></code> | <code>str</code> | The name of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type">type</a></code> | <code>str</code> | The type of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config">config</a></code> | <code>typing.Mapping[str]</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson">config_json</a></code> | <code>str</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description">description</a></code> | <code>str</code> | A free form human readable description of the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName">display_name</a></code> | <code>str</code> | An optional name to use instead of the name attribute when displaying information about this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">max_token_ttl</a></code> | <code>str</code> | The maximum life of any token created by this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace in which to create the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule">namespace_rule</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]</code> | namespace_rule block. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition">partition</a></code> | <code>str</code> | The partition the ACL auth method is associated with. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">token_locality</a></code> | <code>str</code> | The kind of token that this auth method produces. This can be either 'local' or 'global'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```python
config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `config_json`<sup>Optional</sup> <a name="config_json" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson"></a>

```python
config_json: str
```

- *Type:* str

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#config_json AclAuthMethod#config_json}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free form human readable description of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#description AclAuthMethod#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

An optional name to use instead of the name attribute when displaying information about this auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#display_name AclAuthMethod#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_token_ttl`<sup>Optional</sup> <a name="max_token_ttl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```python
max_token_ttl: str
```

- *Type:* str

The maximum life of any token created by this auth method.

**This attribute is required and must be set to a nonzero for the OIDC auth method.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace in which to create the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace AclAuthMethod#namespace}

---

##### `namespace_rule`<sup>Optional</sup> <a name="namespace_rule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule"></a>

```python
namespace_rule: IResolvable | typing.List[AclAuthMethodNamespaceRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]

namespace_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#namespace_rule AclAuthMethod#namespace_rule}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

The partition the ACL auth method is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#partition AclAuthMethod#partition}

---

##### `token_locality`<sup>Optional</sup> <a name="token_locality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```python
token_locality: str
```

- *Type:* str

The kind of token that this auth method produces. This can be either 'local' or 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

### AclAuthMethodNamespaceRule <a name="AclAuthMethodNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethodNamespaceRule(
  bind_namespace: str,
  selector: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace">bind_namespace</a></code> | <code>str</code> | If the namespace rule's `selector` matches then this is used to control the namespace where the token is created. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector">selector</a></code> | <code>str</code> | Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation. |

---

##### `bind_namespace`<sup>Required</sup> <a name="bind_namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace"></a>

```python
bind_namespace: str
```

- *Type:* str

If the namespace rule's `selector` matches then this is used to control the namespace where the token is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#bind_namespace AclAuthMethod#bind_namespace}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector"></a>

```python
selector: str
```

- *Type:* str

Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_auth_method#selector AclAuthMethod#selector}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodNamespaceRuleList <a name="AclAuthMethodNamespaceRuleList" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethodNamespaceRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AclAuthMethodNamespaceRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AclAuthMethodNamespaceRule]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a>]

---


### AclAuthMethodNamespaceRuleOutputReference <a name="AclAuthMethodNamespaceRuleOutputReference" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_auth_method

aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector">reset_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput">bind_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace">bind_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bind_namespace_input`<sup>Optional</sup> <a name="bind_namespace_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput"></a>

```python
bind_namespace_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `bind_namespace`<sup>Required</sup> <a name="bind_namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace"></a>

```python
bind_namespace: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue"></a>

```python
internal_value: AclAuthMethodNamespaceRule | IResolvable
```

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule">AclAuthMethodNamespaceRule</a> | cdktf.IResolvable

---



