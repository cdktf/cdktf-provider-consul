# `configEntryV2ExportedServices` Submodule <a name="`configEntryV2ExportedServices` Submodule" id="@cdktf/provider-consul.configEntryV2ExportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryV2ExportedServices <a name="ConfigEntryV2ExportedServices" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services consul_config_entry_v2_exported_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryv2exportedservices"

configentryv2exportedservices.NewConfigEntryV2ExportedServices(scope Construct, id *string, config ConfigEntryV2ExportedServicesConfig) ConfigEntryV2ExportedServices
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig">ConfigEntryV2ExportedServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig">ConfigEntryV2ExportedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetPartitionConsumers">ResetPartitionConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetPeerConsumers">ResetPeerConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetSamenessGroupConsumers">ResetSamenessGroupConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPartitionConsumers` <a name="ResetPartitionConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetPartitionConsumers"></a>

```go
func ResetPartitionConsumers()
```

##### `ResetPeerConsumers` <a name="ResetPeerConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetPeerConsumers"></a>

```go
func ResetPeerConsumers()
```

##### `ResetSamenessGroupConsumers` <a name="ResetSamenessGroupConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetSamenessGroupConsumers"></a>

```go
func ResetSamenessGroupConsumers()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.resetServices"></a>

```go
func ResetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryv2exportedservices"

configentryv2exportedservices.ConfigEntryV2ExportedServices_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryv2exportedservices"

configentryv2exportedservices.ConfigEntryV2ExportedServices_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryv2exportedservices"

configentryv2exportedservices.ConfigEntryV2ExportedServices_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryv2exportedservices"

configentryv2exportedservices.ConfigEntryV2ExportedServices_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigEntryV2ExportedServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigEntryV2ExportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryV2ExportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partitionConsumersInput">PartitionConsumersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partitionInput">PartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.peerConsumersInput">PeerConsumersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.samenessGroupConsumersInput">SamenessGroupConsumersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partition">Partition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partitionConsumers">PartitionConsumers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.peerConsumers">PeerConsumers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.samenessGroupConsumers">SamenessGroupConsumers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionConsumersInput`<sup>Optional</sup> <a name="PartitionConsumersInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partitionConsumersInput"></a>

```go
func PartitionConsumersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partitionInput"></a>

```go
func PartitionInput() *string
```

- *Type:* *string

---

##### `PeerConsumersInput`<sup>Optional</sup> <a name="PeerConsumersInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.peerConsumersInput"></a>

```go
func PeerConsumersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SamenessGroupConsumersInput`<sup>Optional</sup> <a name="SamenessGroupConsumersInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.samenessGroupConsumersInput"></a>

```go
func SamenessGroupConsumersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partition"></a>

```go
func Partition() *string
```

- *Type:* *string

---

##### `PartitionConsumers`<sup>Required</sup> <a name="PartitionConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.partitionConsumers"></a>

```go
func PartitionConsumers() *[]*string
```

- *Type:* *[]*string

---

##### `PeerConsumers`<sup>Required</sup> <a name="PeerConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.peerConsumers"></a>

```go
func PeerConsumers() *[]*string
```

- *Type:* *[]*string

---

##### `SamenessGroupConsumers`<sup>Required</sup> <a name="SamenessGroupConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.samenessGroupConsumers"></a>

```go
func SamenessGroupConsumers() *[]*string
```

- *Type:* *[]*string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServices.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryV2ExportedServicesConfig <a name="ConfigEntryV2ExportedServicesConfig" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/configentryv2exportedservices"

&configentryv2exportedservices.ConfigEntryV2ExportedServicesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Kind: *string,
	Name: *string,
	Partition: *string,
	Id: *string,
	Namespace: *string,
	PartitionConsumers: *[]*string,
	PeerConsumers: *[]*string,
	SamenessGroupConsumers: *[]*string,
	Services: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.kind">Kind</a></code> | <code>*string</code> | The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices). |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.name">Name</a></code> | <code>*string</code> | The name of the config entry to read. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.partition">Partition</a></code> | <code>*string</code> | The partition the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#id ConfigEntryV2ExportedServices#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.partitionConsumers">PartitionConsumers</a></code> | <code>*[]*string</code> | The exported service partition consumers. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.peerConsumers">PeerConsumers</a></code> | <code>*[]*string</code> | The exported service peer consumers. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers">SamenessGroupConsumers</a></code> | <code>*[]*string</code> | The exported service sameness group consumers. |
| <code><a href="#@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.services">Services</a></code> | <code>*[]*string</code> | The exported services. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#kind ConfigEntryV2ExportedServices#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the config entry to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#name ConfigEntryV2ExportedServices#name}

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.partition"></a>

```go
Partition *string
```

- *Type:* *string

The partition the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#partition ConfigEntryV2ExportedServices#partition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#id ConfigEntryV2ExportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#namespace ConfigEntryV2ExportedServices#namespace}

---

##### `PartitionConsumers`<sup>Optional</sup> <a name="PartitionConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.partitionConsumers"></a>

```go
PartitionConsumers *[]*string
```

- *Type:* *[]*string

The exported service partition consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#partition_consumers ConfigEntryV2ExportedServices#partition_consumers}

---

##### `PeerConsumers`<sup>Optional</sup> <a name="PeerConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.peerConsumers"></a>

```go
PeerConsumers *[]*string
```

- *Type:* *[]*string

The exported service peer consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#peer_consumers ConfigEntryV2ExportedServices#peer_consumers}

---

##### `SamenessGroupConsumers`<sup>Optional</sup> <a name="SamenessGroupConsumers" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers"></a>

```go
SamenessGroupConsumers *[]*string
```

- *Type:* *[]*string

The exported service sameness group consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#sameness_group_consumers ConfigEntryV2ExportedServices#sameness_group_consumers}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-consul.configEntryV2ExportedServices.ConfigEntryV2ExportedServicesConfig.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

The exported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_v2_exported_services#services ConfigEntryV2ExportedServices#services}

---



