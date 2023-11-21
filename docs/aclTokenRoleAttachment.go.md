# `consul_acl_token_role_attachment`

Refer to the Terraform Registory for docs: [`consul_acl_token_role_attachment`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token_role_attachment).

# `aclTokenRoleAttachment` Submodule <a name="`aclTokenRoleAttachment` Submodule" id="@cdktf/provider-consul.aclTokenRoleAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclTokenRoleAttachment <a name="AclTokenRoleAttachment" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token_role_attachment consul_acl_token_role_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/acltokenroleattachment"

acltokenroleattachment.NewAclTokenRoleAttachment(scope Construct, id *string, config AclTokenRoleAttachmentConfig) AclTokenRoleAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig">AclTokenRoleAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig">AclTokenRoleAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AclTokenRoleAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/acltokenroleattachment"

acltokenroleattachment.AclTokenRoleAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/acltokenroleattachment"

acltokenroleattachment.AclTokenRoleAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/acltokenroleattachment"

acltokenroleattachment.AclTokenRoleAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/acltokenroleattachment"

acltokenroleattachment.AclTokenRoleAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AclTokenRoleAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AclTokenRoleAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AclTokenRoleAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token_role_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AclTokenRoleAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.tokenIdInput">TokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.tokenId">TokenId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TokenIdInput`<sup>Optional</sup> <a name="TokenIdInput" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.tokenIdInput"></a>

```go
func TokenIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.tokenId"></a>

```go
func TokenId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AclTokenRoleAttachmentConfig <a name="AclTokenRoleAttachmentConfig" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/acltokenroleattachment"

&acltokenroleattachment.AclTokenRoleAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Role: *string,
	TokenId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.role">Role</a></code> | <code>*string</code> | The role name. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.tokenId">TokenId</a></code> | <code>*string</code> | The token accessor id. |
| <code><a href="#@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token_role_attachment#id AclTokenRoleAttachment#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token_role_attachment#role AclTokenRoleAttachment#role}

---

##### `TokenId`<sup>Required</sup> <a name="TokenId" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.tokenId"></a>

```go
TokenId *string
```

- *Type:* *string

The token accessor id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token_role_attachment#token_id AclTokenRoleAttachment#token_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.aclTokenRoleAttachment.AclTokenRoleAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_token_role_attachment#id AclTokenRoleAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



