# `service` Submodule <a name="`service` Submodule" id="@cdktf/provider-consul.service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Service <a name="Service" id="@cdktf/provider-consul.service.Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service consul_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.Service.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.NewService(scope Construct, id *string, config ServiceConfig) Service
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.service.Service.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.service.Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.service.ServiceConfig">ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.service.Service.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.service.Service.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.service.Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.service.ServiceConfig">ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.service.Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.service.Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.service.Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.service.Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.service.Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.service.Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.service.Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.service.Service.putCheck">PutCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetCheck">ResetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetEnableTagOverride">ResetEnableTagOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetExternal">ResetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetServiceId">ResetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.resetWeights">ResetWeights</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.service.Service.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.service.Service.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.service.Service.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.Service.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.service.Service.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.service.Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.service.Service.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.service.Service.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.service.Service.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.service.Service.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.service.Service.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.service.Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.service.Service.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.service.Service.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.service.Service.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.service.Service.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.service.Service.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.service.Service.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.service.Service.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.service.Service.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.service.Service.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.service.Service.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.service.Service.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.service.Service.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.service.Service.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.service.Service.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.service.Service.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.service.Service.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.service.Service.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.service.Service.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.service.Service.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.service.Service.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.service.Service.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCheck` <a name="PutCheck" id="@cdktf/provider-consul.service.Service.putCheck"></a>

```go
func PutCheck(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.Service.putCheck.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-consul.service.Service.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetCheck` <a name="ResetCheck" id="@cdktf/provider-consul.service.Service.resetCheck"></a>

```go
func ResetCheck()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.service.Service.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetEnableTagOverride` <a name="ResetEnableTagOverride" id="@cdktf/provider-consul.service.Service.resetEnableTagOverride"></a>

```go
func ResetEnableTagOverride()
```

##### `ResetExternal` <a name="ResetExternal" id="@cdktf/provider-consul.service.Service.resetExternal"></a>

```go
func ResetExternal()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.service.Service.resetId"></a>

```go
func ResetId()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.service.Service.resetMeta"></a>

```go
func ResetMeta()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.service.Service.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.service.Service.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-consul.service.Service.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServiceId` <a name="ResetServiceId" id="@cdktf/provider-consul.service.Service.resetServiceId"></a>

```go
func ResetServiceId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-consul.service.Service.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWeights` <a name="ResetWeights" id="@cdktf/provider-consul.service.Service.resetWeights"></a>

```go
func ResetWeights()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.service.Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.service.Service.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.Service_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.service.Service.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.service.Service.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.Service_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.service.Service.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.service.Service.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.Service_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.service.Service.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.service.Service.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.Service_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.service.Service.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.service.Service.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.check">Check</a></code> | <code><a href="#@cdktf/provider-consul.service.ServiceCheckList">ServiceCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.checkInput">CheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.enableTagOverrideInput">EnableTagOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.externalInput">ExternalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.metaInput">MetaInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.nodeAttributeInput">NodeAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.weightsInput">WeightsInput</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.enableTagOverride">EnableTagOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.external">External</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.meta">Meta</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.nodeAttribute">NodeAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.Service.property.weights">Weights</a></code> | <code>*map[string]*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.service.Service.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.service.Service.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.service.Service.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.service.Service.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.service.Service.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.service.Service.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.service.Service.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.service.Service.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.service.Service.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.service.Service.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.service.Service.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.service.Service.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.service.Service.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.service.Service.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktf/provider-consul.service.Service.property.check"></a>

```go
func Check() ServiceCheckList
```

- *Type:* <a href="#@cdktf/provider-consul.service.ServiceCheckList">ServiceCheckList</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-consul.service.Service.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `CheckInput`<sup>Optional</sup> <a name="CheckInput" id="@cdktf/provider-consul.service.Service.property.checkInput"></a>

```go
func CheckInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.service.Service.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `EnableTagOverrideInput`<sup>Optional</sup> <a name="EnableTagOverrideInput" id="@cdktf/provider-consul.service.Service.property.enableTagOverrideInput"></a>

```go
func EnableTagOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalInput`<sup>Optional</sup> <a name="ExternalInput" id="@cdktf/provider-consul.service.Service.property.externalInput"></a>

```go
func ExternalInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.service.Service.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.service.Service.property.metaInput"></a>

```go
func MetaInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.service.Service.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.service.Service.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NodeAttributeInput`<sup>Optional</sup> <a name="NodeAttributeInput" id="@cdktf/provider-consul.service.Service.property.nodeAttributeInput"></a>

```go
func NodeAttributeInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.service.Service.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-consul.service.Service.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-consul.service.Service.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-consul.service.Service.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeightsInput`<sup>Optional</sup> <a name="WeightsInput" id="@cdktf/provider-consul.service.Service.property.weightsInput"></a>

```go
func WeightsInput() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-consul.service.Service.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.service.Service.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `EnableTagOverride`<sup>Required</sup> <a name="EnableTagOverride" id="@cdktf/provider-consul.service.Service.property.enableTagOverride"></a>

```go
func EnableTagOverride() interface{}
```

- *Type:* interface{}

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-consul.service.Service.property.external"></a>

```go
func External() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.service.Service.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.service.Service.property.meta"></a>

```go
func Meta() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.service.Service.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.service.Service.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NodeAttribute`<sup>Required</sup> <a name="NodeAttribute" id="@cdktf/provider-consul.service.Service.property.nodeAttribute"></a>

```go
func NodeAttribute() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.service.Service.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-consul.service.Service.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-consul.service.Service.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-consul.service.Service.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Weights`<sup>Required</sup> <a name="Weights" id="@cdktf/provider-consul.service.Service.property.weights"></a>

```go
func Weights() *map[string]*f64
```

- *Type:* *map[string]*f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.Service.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.service.Service.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCheck <a name="ServiceCheck" id="@cdktf/provider-consul.service.ServiceCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.service.ServiceCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

&service.ServiceCheck {
	CheckId: *string,
	Interval: *string,
	Name: *string,
	Timeout: *string,
	DeregisterCriticalServiceAfter: *string,
	Header: interface{},
	Http: *string,
	Method: *string,
	Notes: *string,
	Status: *string,
	Tcp: *string,
	TlsSkipVerify: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.checkId">CheckId</a></code> | <code>*string</code> | An ID, *unique per agent*. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.interval">Interval</a></code> | <code>*string</code> | The interval to wait between each health-check invocation. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.name">Name</a></code> | <code>*string</code> | The name of the health-check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.timeout">Timeout</a></code> | <code>*string</code> | Specifies a timeout for outgoing connections in the case of a HTTP or TCP check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.deregisterCriticalServiceAfter">DeregisterCriticalServiceAfter</a></code> | <code>*string</code> | The time after which the service is automatically deregistered when in the `critical` state. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.header">Header</a></code> | <code>interface{}</code> | header block. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.http">Http</a></code> | <code>*string</code> | The HTTP endpoint to call for an HTTP check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.method">Method</a></code> | <code>*string</code> | The method to use for HTTP health-checks. Defaults to `GET`. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.notes">Notes</a></code> | <code>*string</code> | An opaque field meant to hold human readable text. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.status">Status</a></code> | <code>*string</code> | The initial health-check status. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.tcp">Tcp</a></code> | <code>*string</code> | The TCP address and port to connect to for a TCP check. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheck.property.tlsSkipVerify">TlsSkipVerify</a></code> | <code>interface{}</code> | Whether to deactivate certificate verification for HTTP health-checks. Defaults to `false`. |

---

##### `CheckId`<sup>Required</sup> <a name="CheckId" id="@cdktf/provider-consul.service.ServiceCheck.property.checkId"></a>

```go
CheckId *string
```

- *Type:* *string

An ID, *unique per agent*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#check_id Service#check_id}

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-consul.service.ServiceCheck.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

The interval to wait between each health-check invocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#interval Service#interval}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.service.ServiceCheck.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the health-check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#name Service#name}

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-consul.service.ServiceCheck.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Specifies a timeout for outgoing connections in the case of a HTTP or TCP check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#timeout Service#timeout}

---

##### `DeregisterCriticalServiceAfter`<sup>Optional</sup> <a name="DeregisterCriticalServiceAfter" id="@cdktf/provider-consul.service.ServiceCheck.property.deregisterCriticalServiceAfter"></a>

```go
DeregisterCriticalServiceAfter *string
```

- *Type:* *string

The time after which the service is automatically deregistered when in the `critical` state.

Defaults to `30s`. Setting to `0` will disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#deregister_critical_service_after Service#deregister_critical_service_after}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-consul.service.ServiceCheck.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#header Service#header}

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktf/provider-consul.service.ServiceCheck.property.http"></a>

```go
Http *string
```

- *Type:* *string

The HTTP endpoint to call for an HTTP check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#http Service#http}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-consul.service.ServiceCheck.property.method"></a>

```go
Method *string
```

- *Type:* *string

The method to use for HTTP health-checks. Defaults to `GET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#method Service#method}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-consul.service.ServiceCheck.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

An opaque field meant to hold human readable text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#notes Service#notes}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-consul.service.ServiceCheck.property.status"></a>

```go
Status *string
```

- *Type:* *string

The initial health-check status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#status Service#status}

---

##### `Tcp`<sup>Optional</sup> <a name="Tcp" id="@cdktf/provider-consul.service.ServiceCheck.property.tcp"></a>

```go
Tcp *string
```

- *Type:* *string

The TCP address and port to connect to for a TCP check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#tcp Service#tcp}

---

##### `TlsSkipVerify`<sup>Optional</sup> <a name="TlsSkipVerify" id="@cdktf/provider-consul.service.ServiceCheck.property.tlsSkipVerify"></a>

```go
TlsSkipVerify interface{}
```

- *Type:* interface{}

Whether to deactivate certificate verification for HTTP health-checks. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#tls_skip_verify Service#tls_skip_verify}

---

### ServiceCheckHeader <a name="ServiceCheckHeader" id="@cdktf/provider-consul.service.ServiceCheckHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.service.ServiceCheckHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

&service.ServiceCheckHeader {
	Name: *string,
	Value: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeader.property.name">Name</a></code> | <code>*string</code> | The name of the header. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeader.property.value">Value</a></code> | <code>*[]*string</code> | The header's list of values. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.service.ServiceCheckHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#name Service#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.service.ServiceCheckHeader.property.value"></a>

```go
Value *[]*string
```

- *Type:* *[]*string

The header's list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#value Service#value}

---

### ServiceConfig <a name="ServiceConfig" id="@cdktf/provider-consul.service.ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.service.ServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

&service.ServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NodeAttribute: *string,
	Address: *string,
	Check: interface{},
	Datacenter: *string,
	EnableTagOverride: interface{},
	External: interface{},
	Id: *string,
	Meta: *map[string]*string,
	Namespace: *string,
	Partition: *string,
	Port: *f64,
	ServiceId: *string,
	Tags: *[]*string,
	Weights: *map[string]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.name">Name</a></code> | <code>*string</code> | The name of the service. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.nodeAttribute">NodeAttribute</a></code> | <code>*string</code> | The name of the node the to register the service on. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.address">Address</a></code> | <code>*string</code> | The address of the service. Defaults to the address of the node. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.check">Check</a></code> | <code>interface{}</code> | check block. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.enableTagOverride">EnableTagOverride</a></code> | <code>interface{}</code> | Specifies to disable the anti-entropy feature for this service's tags. Defaults to `false`. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.external">External</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#external Service#external}. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#id Service#id}. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.meta">Meta</a></code> | <code>*map[string]*string</code> | A map of arbitrary KV metadata linked to the service instance. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace to create the service within. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.partition">Partition</a></code> | <code>*string</code> | The partition the service is associated with. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.port">Port</a></code> | <code>*f64</code> | The port of the service. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | If the service ID is not provided, it will be defaulted to the value of the `name` attribute. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A list of values that are opaque to Consul, but can be used to distinguish between services or nodes. |
| <code><a href="#@cdktf/provider-consul.service.ServiceConfig.property.weights">Weights</a></code> | <code>*map[string]*f64</code> | Object that configures how the service responds to DNS SRV requests based on the service's health status. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.service.ServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.service.ServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.service.ServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.service.ServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.service.ServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.service.ServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.service.ServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.service.ServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#name Service#name}

---

##### `NodeAttribute`<sup>Required</sup> <a name="NodeAttribute" id="@cdktf/provider-consul.service.ServiceConfig.property.nodeAttribute"></a>

```go
NodeAttribute *string
```

- *Type:* *string

The name of the node the to register the service on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#node Service#node}

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-consul.service.ServiceConfig.property.address"></a>

```go
Address *string
```

- *Type:* *string

The address of the service. Defaults to the address of the node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#address Service#address}

---

##### `Check`<sup>Optional</sup> <a name="Check" id="@cdktf/provider-consul.service.ServiceConfig.property.check"></a>

```go
Check interface{}
```

- *Type:* interface{}

check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#check Service#check}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.service.ServiceConfig.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#datacenter Service#datacenter}

---

##### `EnableTagOverride`<sup>Optional</sup> <a name="EnableTagOverride" id="@cdktf/provider-consul.service.ServiceConfig.property.enableTagOverride"></a>

```go
EnableTagOverride interface{}
```

- *Type:* interface{}

Specifies to disable the anti-entropy feature for this service's tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#enable_tag_override Service#enable_tag_override}

---

##### `External`<sup>Optional</sup> <a name="External" id="@cdktf/provider-consul.service.ServiceConfig.property.external"></a>

```go
External interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#external Service#external}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.service.ServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#id Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.service.ServiceConfig.property.meta"></a>

```go
Meta *map[string]*string
```

- *Type:* *map[string]*string

A map of arbitrary KV metadata linked to the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#meta Service#meta}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.service.ServiceConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace to create the service within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#namespace Service#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.service.ServiceConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

The partition the service is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#partition Service#partition}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-consul.service.ServiceConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#port Service#port}

---

##### `ServiceId`<sup>Optional</sup> <a name="ServiceId" id="@cdktf/provider-consul.service.ServiceConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

If the service ID is not provided, it will be defaulted to the value of the `name` attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#service_id Service#service_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-consul.service.ServiceConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A list of values that are opaque to Consul, but can be used to distinguish between services or nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#tags Service#tags}

---

##### `Weights`<sup>Optional</sup> <a name="Weights" id="@cdktf/provider-consul.service.ServiceConfig.property.weights"></a>

```go
Weights *map[string]*f64
```

- *Type:* *map[string]*f64

Object that configures how the service responds to DNS SRV requests based on the service's health status.

You can specify one or more of the following states and configure an integer value indicating its weight: `passing`, `warning`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/service#weights Service#weights}

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCheckHeaderList <a name="ServiceCheckHeaderList" id="@cdktf/provider-consul.service.ServiceCheckHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.NewServiceCheckHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceCheckHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.get"></a>

```go
func Get(index *f64) ServiceCheckHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.service.ServiceCheckHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceCheckHeaderOutputReference <a name="ServiceCheckHeaderOutputReference" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.NewServiceCheckHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceCheckHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.value">Value</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.value"></a>

```go
func Value() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.service.ServiceCheckHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceCheckList <a name="ServiceCheckList" id="@cdktf/provider-consul.service.ServiceCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.NewServiceCheckList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceCheckList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.service.ServiceCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.service.ServiceCheckList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.service.ServiceCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.service.ServiceCheckList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.service.ServiceCheckList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.service.ServiceCheckList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.service.ServiceCheckList.get"></a>

```go
func Get(index *f64) ServiceCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.service.ServiceCheckList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.service.ServiceCheckList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.service.ServiceCheckList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.service.ServiceCheckList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServiceCheckOutputReference <a name="ServiceCheckOutputReference" id="@cdktf/provider-consul.service.ServiceCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/service"

service.NewServiceCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetDeregisterCriticalServiceAfter">ResetDeregisterCriticalServiceAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHttp">ResetHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTcp">ResetTcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTlsSkipVerify">ResetTlsSkipVerify</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.putHeader"></a>

```go
func PutHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.putHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeregisterCriticalServiceAfter` <a name="ResetDeregisterCriticalServiceAfter" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetDeregisterCriticalServiceAfter"></a>

```go
func ResetDeregisterCriticalServiceAfter()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetHttp` <a name="ResetHttp" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetHttp"></a>

```go
func ResetHttp()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTcp` <a name="ResetTcp" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTcp"></a>

```go
func ResetTcp()
```

##### `ResetTlsSkipVerify` <a name="ResetTlsSkipVerify" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.resetTlsSkipVerify"></a>

```go
func ResetTlsSkipVerify()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList">ServiceCheckHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkIdInput">CheckIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfterInput">DeregisterCriticalServiceAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.httpInput">HttpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcpInput">TcpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerifyInput">TlsSkipVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkId">CheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfter">DeregisterCriticalServiceAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.http">Http</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcp">Tcp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerify">TlsSkipVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.service.ServiceCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.header"></a>

```go
func Header() ServiceCheckHeaderList
```

- *Type:* <a href="#@cdktf/provider-consul.service.ServiceCheckHeaderList">ServiceCheckHeaderList</a>

---

##### `CheckIdInput`<sup>Optional</sup> <a name="CheckIdInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkIdInput"></a>

```go
func CheckIdInput() *string
```

- *Type:* *string

---

##### `DeregisterCriticalServiceAfterInput`<sup>Optional</sup> <a name="DeregisterCriticalServiceAfterInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfterInput"></a>

```go
func DeregisterCriticalServiceAfterInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.httpInput"></a>

```go
func HttpInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TcpInput`<sup>Optional</sup> <a name="TcpInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcpInput"></a>

```go
func TcpInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TlsSkipVerifyInput`<sup>Optional</sup> <a name="TlsSkipVerifyInput" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerifyInput"></a>

```go
func TlsSkipVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `CheckId`<sup>Required</sup> <a name="CheckId" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.checkId"></a>

```go
func CheckId() *string
```

- *Type:* *string

---

##### `DeregisterCriticalServiceAfter`<sup>Required</sup> <a name="DeregisterCriticalServiceAfter" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.deregisterCriticalServiceAfter"></a>

```go
func DeregisterCriticalServiceAfter() *string
```

- *Type:* *string

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.http"></a>

```go
func Http() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tcp"></a>

```go
func Tcp() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `TlsSkipVerify`<sup>Required</sup> <a name="TlsSkipVerify" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.tlsSkipVerify"></a>

```go
func TlsSkipVerify() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.service.ServiceCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



