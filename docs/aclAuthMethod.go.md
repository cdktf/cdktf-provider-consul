# `aclAuthMethod` Submodule <a name="`aclAuthMethod` Submodule" id="@cdktf/provider-consul.aclAuthMethod"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclAuthMethod <a name="AclAuthMethod" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method consul_acl_auth_method}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

aclauthmethod.NewAclAuthMethod(scope Construct, id *string, config AclAuthMethodConfig) AclAuthMethod
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig">AclAuthMethodConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule">PutNamespaceRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson">ResetConfigJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl">ResetMaxTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule">ResetNamespaceRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality">ResetTokenLocality</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutNamespaceRule` <a name="PutNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule"></a>

```go
func PutNamespaceRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.putNamespaceRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetConfigJson` <a name="ResetConfigJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetConfigJson"></a>

```go
func ResetConfigJson()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxTokenTtl` <a name="ResetMaxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetMaxTokenTtl"></a>

```go
func ResetMaxTokenTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNamespaceRule` <a name="ResetNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetNamespaceRule"></a>

```go
func ResetNamespaceRule()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetTokenLocality` <a name="ResetTokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.resetTokenLocality"></a>

```go
func ResetTokenLocality()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

aclauthmethod.AclAuthMethod_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

aclauthmethod.AclAuthMethod_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

aclauthmethod.AclAuthMethod_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

aclauthmethod.AclAuthMethod_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AclAuthMethod resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AclAuthMethod to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AclAuthMethod that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AclAuthMethod to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule">NamespaceRule</a></code> | <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput">ConfigInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput">ConfigJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput">MaxTokenTtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput">NamespaceRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput">TokenLocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config">Config</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson">ConfigJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality">TokenLocality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NamespaceRule`<sup>Required</sup> <a name="NamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRule"></a>

```go
func NamespaceRule() AclAuthMethodNamespaceRuleList
```

- *Type:* <a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList">AclAuthMethodNamespaceRuleList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configInput"></a>

```go
func ConfigInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConfigJsonInput`<sup>Optional</sup> <a name="ConfigJsonInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJsonInput"></a>

```go
func ConfigJsonInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxTokenTtlInput`<sup>Optional</sup> <a name="MaxTokenTtlInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtlInput"></a>

```go
func MaxTokenTtlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NamespaceRuleInput`<sup>Optional</sup> <a name="NamespaceRuleInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespaceRuleInput"></a>

```go
func NamespaceRuleInput() interface{}
```

- *Type:* interface{}

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `TokenLocalityInput`<sup>Optional</sup> <a name="TokenLocalityInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocalityInput"></a>

```go
func TokenLocalityInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.config"></a>

```go
func Config() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ConfigJson`<sup>Required</sup> <a name="ConfigJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.configJson"></a>

```go
func ConfigJson() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.maxTokenTtl"></a>

```go
func MaxTokenTtl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `TokenLocality`<sup>Required</sup> <a name="TokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tokenLocality"></a>

```go
func TokenLocality() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethod.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AclAuthMethodConfig <a name="AclAuthMethodConfig" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

&aclauthmethod.AclAuthMethodConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	Config: *map[string]*string,
	ConfigJson: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	MaxTokenTtl: *string,
	Namespace: *string,
	NamespaceRule: interface{},
	Partition: *string,
	TokenLocality: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name">Name</a></code> | <code>*string</code> | The name of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type">Type</a></code> | <code>*string</code> | The type of the ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config">Config</a></code> | <code>*map[string]*string</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson">ConfigJson</a></code> | <code>*string</code> | The raw configuration for this ACL auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description">Description</a></code> | <code>*string</code> | A free form human readable description of the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | An optional name to use instead of the name attribute when displaying information about this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#id AclAuthMethod#id}. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>*string</code> | The maximum life of any token created by this auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace in which to create the auth method. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule">NamespaceRule</a></code> | <code>interface{}</code> | namespace_rule block. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition">Partition</a></code> | <code>*string</code> | The partition the ACL auth method is associated with. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality">TokenLocality</a></code> | <code>*string</code> | The kind of token that this auth method produces. This can be either 'local' or 'global'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#name AclAuthMethod#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#type AclAuthMethod#type}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.config"></a>

```go
Config *map[string]*string
```

- *Type:* *map[string]*string

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#config AclAuthMethod#config}

---

##### `ConfigJson`<sup>Optional</sup> <a name="ConfigJson" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.configJson"></a>

```go
ConfigJson *string
```

- *Type:* *string

The raw configuration for this ACL auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#config_json AclAuthMethod#config_json}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free form human readable description of the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#description AclAuthMethod#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

An optional name to use instead of the name attribute when displaying information about this auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#display_name AclAuthMethod#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#id AclAuthMethod#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxTokenTtl`<sup>Optional</sup> <a name="MaxTokenTtl" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.maxTokenTtl"></a>

```go
MaxTokenTtl *string
```

- *Type:* *string

The maximum life of any token created by this auth method.

**This attribute is required and must be set to a nonzero for the OIDC auth method.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#max_token_ttl AclAuthMethod#max_token_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace in which to create the auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#namespace AclAuthMethod#namespace}

---

##### `NamespaceRule`<sup>Optional</sup> <a name="NamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.namespaceRule"></a>

```go
NamespaceRule interface{}
```

- *Type:* interface{}

namespace_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#namespace_rule AclAuthMethod#namespace_rule}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

The partition the ACL auth method is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#partition AclAuthMethod#partition}

---

##### `TokenLocality`<sup>Optional</sup> <a name="TokenLocality" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodConfig.property.tokenLocality"></a>

```go
TokenLocality *string
```

- *Type:* *string

The kind of token that this auth method produces. This can be either 'local' or 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#token_locality AclAuthMethod#token_locality}

---

### AclAuthMethodNamespaceRule <a name="AclAuthMethodNamespaceRule" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

&aclauthmethod.AclAuthMethodNamespaceRule {
	BindNamespace: *string,
	Selector: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace">BindNamespace</a></code> | <code>*string</code> | If the namespace rule's `selector` matches then this is used to control the namespace where the token is created. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector">Selector</a></code> | <code>*string</code> | Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation. |

---

##### `BindNamespace`<sup>Required</sup> <a name="BindNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.bindNamespace"></a>

```go
BindNamespace *string
```

- *Type:* *string

If the namespace rule's `selector` matches then this is used to control the namespace where the token is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#bind_namespace AclAuthMethod#bind_namespace}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRule.property.selector"></a>

```go
Selector *string
```

- *Type:* *string

Specifies the expression used to match this namespace rule against valid identities returned from an auth method validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_auth_method#selector AclAuthMethod#selector}

---

## Classes <a name="Classes" id="Classes"></a>

### AclAuthMethodNamespaceRuleList <a name="AclAuthMethodNamespaceRuleList" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

aclauthmethod.NewAclAuthMethodNamespaceRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AclAuthMethodNamespaceRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get"></a>

```go
func Get(index *f64) AclAuthMethodNamespaceRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AclAuthMethodNamespaceRuleOutputReference <a name="AclAuthMethodNamespaceRuleOutputReference" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v8/aclauthmethod"

aclauthmethod.NewAclAuthMethodNamespaceRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AclAuthMethodNamespaceRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.resetSelector"></a>

```go
func ResetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput">BindNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput">SelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace">BindNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector">Selector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BindNamespaceInput`<sup>Optional</sup> <a name="BindNamespaceInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespaceInput"></a>

```go
func BindNamespaceInput() *string
```

- *Type:* *string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selectorInput"></a>

```go
func SelectorInput() *string
```

- *Type:* *string

---

##### `BindNamespace`<sup>Required</sup> <a name="BindNamespace" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.bindNamespace"></a>

```go
func BindNamespace() *string
```

- *Type:* *string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.selector"></a>

```go
func Selector() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclAuthMethod.AclAuthMethodNamespaceRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



