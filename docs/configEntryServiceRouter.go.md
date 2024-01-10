# `configEntryServiceRouter` Submodule <a name="`configEntryServiceRouter` Submodule" id="@cdktf/provider-consul.configEntryServiceRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceRouter <a name="ConfigEntryServiceRouter" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router consul_config_entry_service_router}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouter(scope Construct, id *string, config ConfigEntryServiceRouterConfig) ConfigEntryServiceRouter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig">ConfigEntryServiceRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig">ConfigEntryServiceRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes">PutRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes">ResetRoutes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutes` <a name="PutRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes"></a>

```go
func PutRoutes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.putRoutes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetId"></a>

```go
func ResetId()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetMeta"></a>

```go
func ResetMeta()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetRoutes` <a name="ResetRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.resetRoutes"></a>

```go
func ResetRoutes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.ConfigEntryServiceRouter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.ConfigEntryServiceRouter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.ConfigEntryServiceRouter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.ConfigEntryServiceRouter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigEntryServiceRouter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigEntryServiceRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigEntryServiceRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput">MetaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput">RoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta">Meta</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routes"></a>

```go
func Routes() ConfigEntryServiceRouterRoutesList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList">ConfigEntryServiceRouterRoutesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.metaInput"></a>

```go
func MetaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `RoutesInput`<sup>Optional</sup> <a name="RoutesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.routesInput"></a>

```go
func RoutesInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.meta"></a>

```go
func Meta() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceRouterConfig <a name="ConfigEntryServiceRouterConfig" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Meta: *map[string]*string,
	Namespace: *string,
	Partition: *string,
	Routes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name">Name</a></code> | <code>*string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta">Meta</a></code> | <code>*map[string]*string</code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition">Partition</a></code> | <code>*string</code> | Specifies the admin partition to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes">Routes</a></code> | <code>interface{}</code> | routes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#id ConfigEntryServiceRouter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.meta"></a>

```go
Meta *map[string]*string
```

- *Type:* *map[string]*string

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#meta ConfigEntryServiceRouter#meta}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `Routes`<sup>Optional</sup> <a name="Routes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterConfig.property.routes"></a>

```go
Routes interface{}
```

- *Type:* interface{}

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#routes ConfigEntryServiceRouter#routes}

---

### ConfigEntryServiceRouterRoutes <a name="ConfigEntryServiceRouterRoutes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutes {
	Destination: github.com/cdktf/cdktf-provider-consul-go/consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination,
	Match: github.com/cdktf/cdktf-provider-consul-go/consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match">Match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | match block. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.destination"></a>

```go
Destination ConfigEntryServiceRouterRoutesDestination
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#destination ConfigEntryServiceRouter#destination}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutes.property.match"></a>

```go
Match ConfigEntryServiceRouterRoutesMatch
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#match ConfigEntryServiceRouter#match}

---

### ConfigEntryServiceRouterRoutesDestination <a name="ConfigEntryServiceRouterRoutesDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutesDestination {
	IdleTimeout: *string,
	Namespace: *string,
	NumRetries: *f64,
	Partition: *string,
	PrefixRewrite: *string,
	RequestHeaders: github.com/cdktf/cdktf-provider-consul-go/consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders,
	RequestTimeout: *string,
	ResponseHeaders: github.com/cdktf/cdktf-provider-consul-go/consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders,
	RetryOn: *[]*string,
	RetryOnConnectFailure: interface{},
	RetryOnStatusCodes: *[]*f64,
	Service: *string,
	ServiceSubset: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | Specifies the total amount of time permitted for the request stream to be idle. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace">Namespace</a></code> | <code>*string</code> | Specifies the Consul namespace to resolve the service from instead of the current namespace. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries">NumRetries</a></code> | <code>*f64</code> | Specifies the number of times to retry the request when a retry condition occurs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition">Partition</a></code> | <code>*string</code> | Specifies the Consul admin partition to resolve the service from instead of the current partition. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite">PrefixRewrite</a></code> | <code>*string</code> | Specifies rewrites to the HTTP request path before proxying it to its final destination. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders">ResponseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn">RetryOn</a></code> | <code>*[]*string</code> | Specifies a list of conditions for Consul to retry requests based on the response from an upstream service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure">RetryOnConnectFailure</a></code> | <code>interface{}</code> | Specifies that connection failure errors that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes">RetryOnStatusCodes</a></code> | <code>*[]*f64</code> | Specifies a list of integers for HTTP response status codes that trigger a retry request. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service">Service</a></code> | <code>*string</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry. |

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.idleTimeout"></a>

```go
IdleTimeout *string
```

- *Type:* *string

Specifies the total amount of time permitted for the request stream to be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#idle_timeout ConfigEntryServiceRouter#idle_timeout}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Specifies the Consul namespace to resolve the service from instead of the current namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#namespace ConfigEntryServiceRouter#namespace}

---

##### `NumRetries`<sup>Optional</sup> <a name="NumRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.numRetries"></a>

```go
NumRetries *f64
```

- *Type:* *f64

Specifies the number of times to retry the request when a retry condition occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#num_retries ConfigEntryServiceRouter#num_retries}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

Specifies the Consul admin partition to resolve the service from instead of the current partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#partition ConfigEntryServiceRouter#partition}

---

##### `PrefixRewrite`<sup>Optional</sup> <a name="PrefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.prefixRewrite"></a>

```go
PrefixRewrite *string
```

- *Type:* *string

Specifies rewrites to the HTTP request path before proxying it to its final destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#prefix_rewrite ConfigEntryServiceRouter#prefix_rewrite}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestHeaders"></a>

```go
RequestHeaders ConfigEntryServiceRouterRoutesDestinationRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#request_headers ConfigEntryServiceRouter#request_headers}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.requestTimeout"></a>

```go
RequestTimeout *string
```

- *Type:* *string

Specifies the total amount of time permitted for the entire downstream request to be processed, including retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#request_timeout ConfigEntryServiceRouter#request_timeout}

---

##### `ResponseHeaders`<sup>Optional</sup> <a name="ResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.responseHeaders"></a>

```go
ResponseHeaders ConfigEntryServiceRouterRoutesDestinationResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#response_headers ConfigEntryServiceRouter#response_headers}

---

##### `RetryOn`<sup>Optional</sup> <a name="RetryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOn"></a>

```go
RetryOn *[]*string
```

- *Type:* *[]*string

Specifies a list of conditions for Consul to retry requests based on the response from an upstream service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#retry_on ConfigEntryServiceRouter#retry_on}

---

##### `RetryOnConnectFailure`<sup>Optional</sup> <a name="RetryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnConnectFailure"></a>

```go
RetryOnConnectFailure interface{}
```

- *Type:* interface{}

Specifies that connection failure errors that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#retry_on_connect_failure ConfigEntryServiceRouter#retry_on_connect_failure}

---

##### `RetryOnStatusCodes`<sup>Optional</sup> <a name="RetryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.retryOnStatusCodes"></a>

```go
RetryOnStatusCodes *[]*f64
```

- *Type:* *[]*f64

Specifies a list of integers for HTTP response status codes that trigger a retry request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#retry_on_status_codes ConfigEntryServiceRouter#retry_on_status_codes}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.service"></a>

```go
Service *string
```

- *Type:* *string

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#service ConfigEntryServiceRouter#service}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination.property.serviceSubset"></a>

```go
ServiceSubset *string
```

- *Type:* *string

Specifies a named subset of the given service to resolve instead of the one defined as that service's `default_subset` in the service resolver configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#service_subset ConfigEntryServiceRouter#service_subset}

---

### ConfigEntryServiceRouterRoutesDestinationRequestHeaders <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders {
	Add: *map[string]*string,
	Remove: *[]*string,
	Set: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add">Add</a></code> | <code>*map[string]*string</code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove">Remove</a></code> | <code>*[]*string</code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set">Set</a></code> | <code>*map[string]*string</code> | Defines a set of key-value pairs to add to the request header or to replace existing header values with. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.add"></a>

```go
Add *map[string]*string
```

- *Type:* *map[string]*string

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.remove"></a>

```go
Remove *[]*string
```

- *Type:* *[]*string

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders.property.set"></a>

```go
Set *map[string]*string
```

- *Type:* *map[string]*string

Defines a set of key-value pairs to add to the request header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesDestinationResponseHeaders <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders {
	Add: *map[string]*string,
	Remove: *[]*string,
	Set: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add">Add</a></code> | <code>*map[string]*string</code> | Defines a set of key-value pairs to add to the header. Use header names as the keys. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove">Remove</a></code> | <code>*[]*string</code> | Defines a list of headers to remove. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set">Set</a></code> | <code>*map[string]*string</code> | Defines a set of key-value pairs to add to the response header or to replace existing header values with. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.add"></a>

```go
Add *map[string]*string
```

- *Type:* *map[string]*string

Defines a set of key-value pairs to add to the header. Use header names as the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#add ConfigEntryServiceRouter#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.remove"></a>

```go
Remove *[]*string
```

- *Type:* *[]*string

Defines a list of headers to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#remove ConfigEntryServiceRouter#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders.property.set"></a>

```go
Set *map[string]*string
```

- *Type:* *map[string]*string

Defines a set of key-value pairs to add to the response header or to replace existing header values with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#set ConfigEntryServiceRouter#set}

---

### ConfigEntryServiceRouterRoutesMatch <a name="ConfigEntryServiceRouterRoutesMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutesMatch {
	Http: github.com/cdktf/cdktf-provider-consul-go/consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http">Http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | http block. |

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch.property.http"></a>

```go
Http ConfigEntryServiceRouterRoutesMatchHttp
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#http ConfigEntryServiceRouter#http}

---

### ConfigEntryServiceRouterRoutesMatchHttp <a name="ConfigEntryServiceRouterRoutesMatchHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutesMatchHttp {
	Header: interface{},
	Methods: *[]*string,
	PathExact: *string,
	PathPrefix: *string,
	PathRegex: *string,
	QueryParam: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods">Methods</a></code> | <code>*[]*string</code> | Specifies HTTP methods that the match applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact">PathExact</a></code> | <code>*string</code> | Specifies the exact path to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | Specifies the path prefix to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex">PathRegex</a></code> | <code>*string</code> | Specifies a regular expression to match on the HTTP request path. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam">QueryParam</a></code> | <code>interface{}</code> | query_param block. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#header ConfigEntryServiceRouter#header}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.methods"></a>

```go
Methods *[]*string
```

- *Type:* *[]*string

Specifies HTTP methods that the match applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#methods ConfigEntryServiceRouter#methods}

---

##### `PathExact`<sup>Optional</sup> <a name="PathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathExact"></a>

```go
PathExact *string
```

- *Type:* *string

Specifies the exact path to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#path_exact ConfigEntryServiceRouter#path_exact}

---

##### `PathPrefix`<sup>Optional</sup> <a name="PathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathPrefix"></a>

```go
PathPrefix *string
```

- *Type:* *string

Specifies the path prefix to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#path_prefix ConfigEntryServiceRouter#path_prefix}

---

##### `PathRegex`<sup>Optional</sup> <a name="PathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.pathRegex"></a>

```go
PathRegex *string
```

- *Type:* *string

Specifies a regular expression to match on the HTTP request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#path_regex ConfigEntryServiceRouter#path_regex}

---

##### `QueryParam`<sup>Optional</sup> <a name="QueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp.property.queryParam"></a>

```go
QueryParam interface{}
```

- *Type:* interface{}

query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#query_param ConfigEntryServiceRouter#query_param}

---

### ConfigEntryServiceRouterRoutesMatchHttpHeader <a name="ConfigEntryServiceRouterRoutesMatchHttpHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutesMatchHttpHeader {
	Exact: *string,
	Invert: interface{},
	Name: *string,
	Prefix: *string,
	Present: interface{},
	Regex: *string,
	Suffix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact">Exact</a></code> | <code>*string</code> | Specifies that a request matches when the header with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert">Invert</a></code> | <code>interface{}</code> | Specifies that the logic for the HTTP header match should be inverted. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the HTTP header to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix">Prefix</a></code> | <code>*string</code> | Specifies that a request matches when the header with the given name has this prefix. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present">Present</a></code> | <code>interface{}</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex">Regex</a></code> | <code>*string</code> | Specifies that a request matches when the header with the given name matches this regular expression. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix">Suffix</a></code> | <code>*string</code> | Specifies that a request matches when the header with the given name has this suffix. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Specifies that a request matches when the header with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `Invert`<sup>Optional</sup> <a name="Invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.invert"></a>

```go
Invert interface{}
```

- *Type:* interface{}

Specifies that the logic for the HTTP header match should be inverted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#invert ConfigEntryServiceRouter#invert}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the HTTP header to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Specifies that a request matches when the header with the given name has this prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#prefix ConfigEntryServiceRouter#prefix}

---

##### `Present`<sup>Optional</sup> <a name="Present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.present"></a>

```go
Present interface{}
```

- *Type:* interface{}

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Specifies that a request matches when the header with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeader.property.suffix"></a>

```go
Suffix *string
```

- *Type:* *string

Specifies that a request matches when the header with the given name has this suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#suffix ConfigEntryServiceRouter#suffix}

---

### ConfigEntryServiceRouterRoutesMatchHttpQueryParam <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

&configentryservicerouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam {
	Exact: *string,
	Name: *string,
	Present: interface{},
	Regex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact">Exact</a></code> | <code>*string</code> | Specifies that a request matches when the query parameter with the given name is this exact value. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name">Name</a></code> | <code>*string</code> | Specifies the name of the HTTP query parameter to match. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present">Present</a></code> | <code>interface{}</code> | Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex">Regex</a></code> | <code>*string</code> | Specifies that a request matches when the query parameter with the given name matches this regular expression. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.exact"></a>

```go
Exact *string
```

- *Type:* *string

Specifies that a request matches when the query parameter with the given name is this exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#exact ConfigEntryServiceRouter#exact}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.name"></a>

```go
Name *string
```

- *Type:* *string

Specifies the name of the HTTP query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#name ConfigEntryServiceRouter#name}

---

##### `Present`<sup>Optional</sup> <a name="Present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.present"></a>

```go
Present interface{}
```

- *Type:* interface{}

Specifies that a request matches when the value in the `name` argument is present anywhere in the HTTP query parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#present ConfigEntryServiceRouter#present}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParam.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Specifies that a request matches when the query parameter with the given name matches this regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_router#regex ConfigEntryServiceRouter#regex}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceRouterRoutesDestinationOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigEntryServiceRouterRoutesDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders">PutRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders">PutResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries">ResetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite">ResetPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders">ResetResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn">ResetRetryOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure">ResetRetryOnConnectFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes">ResetRetryOnStatusCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeaders` <a name="PutRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders"></a>

```go
func PutRequestHeaders(value ConfigEntryServiceRouterRoutesDestinationRequestHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---

##### `PutResponseHeaders` <a name="PutResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders"></a>

```go
func PutResponseHeaders(value ConfigEntryServiceRouterRoutesDestinationResponseHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.putResponseHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetIdleTimeout"></a>

```go
func ResetIdleTimeout()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNumRetries` <a name="ResetNumRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetNumRetries"></a>

```go
func ResetNumRetries()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetPrefixRewrite` <a name="ResetPrefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetPrefixRewrite"></a>

```go
func ResetPrefixRewrite()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetResponseHeaders` <a name="ResetResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetResponseHeaders"></a>

```go
func ResetResponseHeaders()
```

##### `ResetRetryOn` <a name="ResetRetryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOn"></a>

```go
func ResetRetryOn()
```

##### `ResetRetryOnConnectFailure` <a name="ResetRetryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnConnectFailure"></a>

```go
func ResetRetryOnConnectFailure()
```

##### `ResetRetryOnStatusCodes` <a name="ResetRetryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetRetryOnStatusCodes"></a>

```go
func ResetRetryOnStatusCodes()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetService"></a>

```go
func ResetService()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.resetServiceSubset"></a>

```go
func ResetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders">ResponseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput">NumRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput">PrefixRewriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput">ResponseHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput">RetryOnConnectFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput">RetryOnInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput">RetryOnStatusCodesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries">NumRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite">PrefixRewrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout">RequestTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn">RetryOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure">RetryOnConnectFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes">RetryOnStatusCodes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference</a>

---

##### `ResponseHeaders`<sup>Required</sup> <a name="ResponseHeaders" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeaders"></a>

```go
func ResponseHeaders() ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference">ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference</a>

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeoutInput"></a>

```go
func IdleTimeoutInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NumRetriesInput`<sup>Optional</sup> <a name="NumRetriesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetriesInput"></a>

```go
func NumRetriesInput() *f64
```

- *Type:* *f64

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `PrefixRewriteInput`<sup>Optional</sup> <a name="PrefixRewriteInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewriteInput"></a>

```go
func PrefixRewriteInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() ConfigEntryServiceRouterRoutesDestinationRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *string
```

- *Type:* *string

---

##### `ResponseHeadersInput`<sup>Optional</sup> <a name="ResponseHeadersInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.responseHeadersInput"></a>

```go
func ResponseHeadersInput() ConfigEntryServiceRouterRoutesDestinationResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---

##### `RetryOnConnectFailureInput`<sup>Optional</sup> <a name="RetryOnConnectFailureInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailureInput"></a>

```go
func RetryOnConnectFailureInput() interface{}
```

- *Type:* interface{}

---

##### `RetryOnInput`<sup>Optional</sup> <a name="RetryOnInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnInput"></a>

```go
func RetryOnInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetryOnStatusCodesInput`<sup>Optional</sup> <a name="RetryOnStatusCodesInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodesInput"></a>

```go
func RetryOnStatusCodesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubsetInput"></a>

```go
func ServiceSubsetInput() *string
```

- *Type:* *string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.idleTimeout"></a>

```go
func IdleTimeout() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.numRetries"></a>

```go
func NumRetries() *f64
```

- *Type:* *f64

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `PrefixRewrite`<sup>Required</sup> <a name="PrefixRewrite" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.prefixRewrite"></a>

```go
func PrefixRewrite() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.requestTimeout"></a>

```go
func RequestTimeout() *string
```

- *Type:* *string

---

##### `RetryOn`<sup>Required</sup> <a name="RetryOn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOn"></a>

```go
func RetryOn() *[]*string
```

- *Type:* *[]*string

---

##### `RetryOnConnectFailure`<sup>Required</sup> <a name="RetryOnConnectFailure" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnConnectFailure"></a>

```go
func RetryOnConnectFailure() interface{}
```

- *Type:* interface{}

---

##### `RetryOnStatusCodes`<sup>Required</sup> <a name="RetryOnStatusCodes" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.retryOnStatusCodes"></a>

```go
func RetryOnStatusCodes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.serviceSubset"></a>

```go
func ServiceSubset() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigEntryServiceRouterRoutesDestination
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---


### ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.resetSet"></a>

```go
func ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput">AddInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput">RemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput">SetInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add">Add</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove">Remove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set">Set</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.addInput"></a>

```go
func AddInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.removeInput"></a>

```go
func RemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.setInput"></a>

```go
func SetInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.add"></a>

```go
func Add() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.remove"></a>

```go
func Remove() *[]*string
```

- *Type:* *[]*string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.set"></a>

```go
func Set() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigEntryServiceRouterRoutesDestinationRequestHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationRequestHeaders">ConfigEntryServiceRouterRoutesDestinationRequestHeaders</a>

---


### ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference <a name="ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetAdd"></a>

```go
func ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetRemove"></a>

```go
func ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.resetSet"></a>

```go
func ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput">AddInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput">RemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput">SetInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add">Add</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove">Remove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set">Set</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.addInput"></a>

```go
func AddInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.removeInput"></a>

```go
func RemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.setInput"></a>

```go
func SetInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.add"></a>

```go
func Add() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.remove"></a>

```go
func Remove() *[]*string
```

- *Type:* *[]*string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.set"></a>

```go
func Set() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigEntryServiceRouterRoutesDestinationResponseHeaders
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationResponseHeaders">ConfigEntryServiceRouterRoutesDestinationResponseHeaders</a>

---


### ConfigEntryServiceRouterRoutesList <a name="ConfigEntryServiceRouterRoutesList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceRouterRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceRouterRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderList <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesMatchHttpHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceRouterRoutesMatchHttpHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert">ResetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent">ResetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetInvert` <a name="ResetInvert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetInvert"></a>

```go
func ResetInvert()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetPresent` <a name="ResetPresent" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetPresent"></a>

```go
func ResetPresent()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.resetSuffix"></a>

```go
func ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput">InvertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput">PresentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput">SuffixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert">Invert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present">Present</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix">Suffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `InvertInput`<sup>Optional</sup> <a name="InvertInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invertInput"></a>

```go
func InvertInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `PresentInput`<sup>Optional</sup> <a name="PresentInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.presentInput"></a>

```go
func PresentInput() interface{}
```

- *Type:* interface{}

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffixInput"></a>

```go
func SuffixInput() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Invert`<sup>Required</sup> <a name="Invert" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.invert"></a>

```go
func Invert() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Present`<sup>Required</sup> <a name="Present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.present"></a>

```go
func Present() interface{}
```

- *Type:* interface{}

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.suffix"></a>

```go
func Suffix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceRouterRoutesMatchHttpOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesMatchHttpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigEntryServiceRouterRoutesMatchHttpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam">PutQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact">ResetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix">ResetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex">ResetPathRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam">ResetQueryParam</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryParam` <a name="PutQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam"></a>

```go
func PutQueryParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.putQueryParam.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetMethods"></a>

```go
func ResetMethods()
```

##### `ResetPathExact` <a name="ResetPathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathExact"></a>

```go
func ResetPathExact()
```

##### `ResetPathPrefix` <a name="ResetPathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathPrefix"></a>

```go
func ResetPathPrefix()
```

##### `ResetPathRegex` <a name="ResetPathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetPathRegex"></a>

```go
func ResetPathRegex()
```

##### `ResetQueryParam` <a name="ResetQueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.resetQueryParam"></a>

```go
func ResetQueryParam()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam">QueryParam</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput">MethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput">PathExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput">PathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput">PathRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput">QueryParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods">Methods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact">PathExact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix">PathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex">PathRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.header"></a>

```go
func Header() ConfigEntryServiceRouterRoutesMatchHttpHeaderList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpHeaderList">ConfigEntryServiceRouterRoutesMatchHttpHeaderList</a>

---

##### `QueryParam`<sup>Required</sup> <a name="QueryParam" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParam"></a>

```go
func QueryParam() ConfigEntryServiceRouterRoutesMatchHttpQueryParamList
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList">ConfigEntryServiceRouterRoutesMatchHttpQueryParamList</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methodsInput"></a>

```go
func MethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathExactInput`<sup>Optional</sup> <a name="PathExactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExactInput"></a>

```go
func PathExactInput() *string
```

- *Type:* *string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefixInput"></a>

```go
func PathPrefixInput() *string
```

- *Type:* *string

---

##### `PathRegexInput`<sup>Optional</sup> <a name="PathRegexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegexInput"></a>

```go
func PathRegexInput() *string
```

- *Type:* *string

---

##### `QueryParamInput`<sup>Optional</sup> <a name="QueryParamInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.queryParamInput"></a>

```go
func QueryParamInput() interface{}
```

- *Type:* interface{}

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.methods"></a>

```go
func Methods() *[]*string
```

- *Type:* *[]*string

---

##### `PathExact`<sup>Required</sup> <a name="PathExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathExact"></a>

```go
func PathExact() *string
```

- *Type:* *string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathPrefix"></a>

```go
func PathPrefix() *string
```

- *Type:* *string

---

##### `PathRegex`<sup>Required</sup> <a name="PathRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.pathRegex"></a>

```go
func PathRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigEntryServiceRouterRoutesMatchHttp
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamList <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamList" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesMatchHttpQueryParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigEntryServiceRouterRoutesMatchHttpQueryParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get"></a>

```go
func Get(index *f64) ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference <a name="ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent">ResetPresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetExact"></a>

```go
func ResetExact()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPresent` <a name="ResetPresent" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetPresent"></a>

```go
func ResetPresent()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput">ExactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput">PresentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present">Present</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exactInput"></a>

```go
func ExactInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PresentInput`<sup>Optional</sup> <a name="PresentInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.presentInput"></a>

```go
func PresentInput() interface{}
```

- *Type:* interface{}

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Present`<sup>Required</sup> <a name="Present" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.present"></a>

```go
func Present() interface{}
```

- *Type:* interface{}

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpQueryParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigEntryServiceRouterRoutesMatchOutputReference <a name="ConfigEntryServiceRouterRoutesMatchOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigEntryServiceRouterRoutesMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp">ResetHttp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp"></a>

```go
func PutHttp(value ConfigEntryServiceRouterRoutesMatchHttp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---

##### `ResetHttp` <a name="ResetHttp" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.resetHttp"></a>

```go
func ResetHttp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.http"></a>

```go
func Http() ConfigEntryServiceRouterRoutesMatchHttpOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttpOutputReference">ConfigEntryServiceRouterRoutesMatchHttpOutputReference</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.httpInput"></a>

```go
func HttpInput() ConfigEntryServiceRouterRoutesMatchHttp
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchHttp">ConfigEntryServiceRouterRoutesMatchHttp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigEntryServiceRouterRoutesMatch
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---


### ConfigEntryServiceRouterRoutesOutputReference <a name="ConfigEntryServiceRouterRoutesOutputReference" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryservicerouter"

configentryservicerouter.NewConfigEntryServiceRouterRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigEntryServiceRouterRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination"></a>

```go
func PutDestination(value ConfigEntryServiceRouterRoutesDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch"></a>

```go
func PutMatch(value ConfigEntryServiceRouterRoutesMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.resetMatch"></a>

```go
func ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destination"></a>

```go
func Destination() ConfigEntryServiceRouterRoutesDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestinationOutputReference">ConfigEntryServiceRouterRoutesDestinationOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.match"></a>

```go
func Match() ConfigEntryServiceRouterRoutesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatchOutputReference">ConfigEntryServiceRouterRoutesMatchOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() ConfigEntryServiceRouterRoutesDestination
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesDestination">ConfigEntryServiceRouterRoutesDestination</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.matchInput"></a>

```go
func MatchInput() ConfigEntryServiceRouterRoutesMatch
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesMatch">ConfigEntryServiceRouterRoutesMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceRouter.ConfigEntryServiceRouterRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



