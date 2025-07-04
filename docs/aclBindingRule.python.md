# `aclBindingRule` Submodule <a name="`aclBindingRule` Submodule" id="@cdktf/provider-consul.aclBindingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclBindingRule <a name="AclBindingRule" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule consul_acl_binding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_method: str,
  bind_name: str,
  bind_type: str,
  bind_vars: AclBindingRuleBindVars = None,
  description: str = None,
  id: str = None,
  namespace: str = None,
  partition: str = None,
  selector: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.authMethod">auth_method</a></code> | <code>str</code> | The name of the ACL auth method this rule apply. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.bindName">bind_name</a></code> | <code>str</code> | The name to bind to a token at login-time. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.bindType">bind_type</a></code> | <code>str</code> | Specifies the way the binding rule affects a token created at login. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.bindVars">bind_vars</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a></code> | bind_vars block. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.description">description</a></code> | <code>str</code> | A free form human readable description of the binding rule. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#id AclBindingRule#id}. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The namespace to create the binding rule within. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.partition">partition</a></code> | <code>str</code> | The partition the ACL binding rule is associated with. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.selector">selector</a></code> | <code>str</code> | The expression used to match this rule against valid identities returned from an auth method validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.authMethod"></a>

- *Type:* str

The name of the ACL auth method this rule apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#auth_method AclBindingRule#auth_method}

---

##### `bind_name`<sup>Required</sup> <a name="bind_name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.bindName"></a>

- *Type:* str

The name to bind to a token at login-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_name AclBindingRule#bind_name}

---

##### `bind_type`<sup>Required</sup> <a name="bind_type" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.bindType"></a>

- *Type:* str

Specifies the way the binding rule affects a token created at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_type AclBindingRule#bind_type}

---

##### `bind_vars`<sup>Optional</sup> <a name="bind_vars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.bindVars"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

bind_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_vars AclBindingRule#bind_vars}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.description"></a>

- *Type:* str

A free form human readable description of the binding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#description AclBindingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#id AclBindingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.namespace"></a>

- *Type:* str

The namespace to create the binding rule within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#namespace AclBindingRule#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.partition"></a>

- *Type:* str

The partition the ACL binding rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#partition AclBindingRule#partition}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.Initializer.parameter.selector"></a>

- *Type:* str

The expression used to match this rule against valid identities returned from an auth method validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#selector AclBindingRule#selector}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.putBindVars">put_bind_vars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetBindVars">reset_bind_vars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetSelector">reset_selector</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bind_vars` <a name="put_bind_vars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.putBindVars"></a>

```python
def put_bind_vars(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.putBindVars.parameter.name"></a>

- *Type:* str

The name of node, workload identity or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#name AclBindingRule#name}

---

##### `reset_bind_vars` <a name="reset_bind_vars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetBindVars"></a>

```python
def reset_bind_vars() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.resetSelector"></a>

```python
def reset_selector() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AclBindingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AclBindingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AclBindingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AclBindingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AclBindingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVars">bind_vars</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference">AclBindingRuleBindVarsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindNameInput">bind_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindTypeInput">bind_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVarsInput">bind_vars_input</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindName">bind_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindType">bind_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selector">selector</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bind_vars`<sup>Required</sup> <a name="bind_vars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVars"></a>

```python
bind_vars: AclBindingRuleBindVarsOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference">AclBindingRuleBindVarsOutputReference</a>

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `bind_name_input`<sup>Optional</sup> <a name="bind_name_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindNameInput"></a>

```python
bind_name_input: str
```

- *Type:* str

---

##### `bind_type_input`<sup>Optional</sup> <a name="bind_type_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindTypeInput"></a>

```python
bind_type_input: str
```

- *Type:* str

---

##### `bind_vars_input`<sup>Optional</sup> <a name="bind_vars_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindVarsInput"></a>

```python
bind_vars_input: AclBindingRuleBindVars
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `bind_name`<sup>Required</sup> <a name="bind_name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindName"></a>

```python
bind_name: str
```

- *Type:* str

---

##### `bind_type`<sup>Required</sup> <a name="bind_type" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.bindType"></a>

```python
bind_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.aclBindingRule.AclBindingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AclBindingRuleBindVars <a name="AclBindingRuleBindVars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRuleBindVars(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars.property.name">name</a></code> | <code>str</code> | The name of node, workload identity or service. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars.property.name"></a>

```python
name: str
```

- *Type:* str

The name of node, workload identity or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#name AclBindingRule#name}

---

### AclBindingRuleConfig <a name="AclBindingRuleConfig" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_method: str,
  bind_name: str,
  bind_type: str,
  bind_vars: AclBindingRuleBindVars = None,
  description: str = None,
  id: str = None,
  namespace: str = None,
  partition: str = None,
  selector: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.authMethod">auth_method</a></code> | <code>str</code> | The name of the ACL auth method this rule apply. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindName">bind_name</a></code> | <code>str</code> | The name to bind to a token at login-time. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindType">bind_type</a></code> | <code>str</code> | Specifies the way the binding rule affects a token created at login. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindVars">bind_vars</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a></code> | bind_vars block. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.description">description</a></code> | <code>str</code> | A free form human readable description of the binding rule. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#id AclBindingRule#id}. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.namespace">namespace</a></code> | <code>str</code> | The namespace to create the binding rule within. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.partition">partition</a></code> | <code>str</code> | The partition the ACL binding rule is associated with. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.selector">selector</a></code> | <code>str</code> | The expression used to match this rule against valid identities returned from an auth method validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

The name of the ACL auth method this rule apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#auth_method AclBindingRule#auth_method}

---

##### `bind_name`<sup>Required</sup> <a name="bind_name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindName"></a>

```python
bind_name: str
```

- *Type:* str

The name to bind to a token at login-time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_name AclBindingRule#bind_name}

---

##### `bind_type`<sup>Required</sup> <a name="bind_type" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindType"></a>

```python
bind_type: str
```

- *Type:* str

Specifies the way the binding rule affects a token created at login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_type AclBindingRule#bind_type}

---

##### `bind_vars`<sup>Optional</sup> <a name="bind_vars" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.bindVars"></a>

```python
bind_vars: AclBindingRuleBindVars
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

bind_vars block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_vars AclBindingRule#bind_vars}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free form human readable description of the binding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#description AclBindingRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#id AclBindingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace to create the binding rule within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#namespace AclBindingRule#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

The partition the ACL binding rule is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#partition AclBindingRule#partition}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleConfig.property.selector"></a>

```python
selector: str
```

- *Type:* str

The expression used to match this rule against valid identities returned from an auth method validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#selector AclBindingRule#selector}

---

## Classes <a name="Classes" id="Classes"></a>

### AclBindingRuleBindVarsOutputReference <a name="AclBindingRuleBindVarsOutputReference" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_consul import acl_binding_rule

aclBindingRule.AclBindingRuleBindVarsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVarsOutputReference.property.internalValue"></a>

```python
internal_value: AclBindingRuleBindVars
```

- *Type:* <a href="#@cdktf/provider-consul.aclBindingRule.AclBindingRuleBindVars">AclBindingRuleBindVars</a>

---



