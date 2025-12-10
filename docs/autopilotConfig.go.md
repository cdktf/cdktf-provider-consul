# `autopilotConfig` Submodule <a name="`autopilotConfig` Submodule" id="@cdktf/provider-consul.autopilotConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutopilotConfig <a name="AutopilotConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config consul_autopilot_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/autopilotconfig"

autopilotconfig.NewAutopilotConfig(scope Construct, id *string, config AutopilotConfigConfig) AutopilotConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig">AutopilotConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig">AutopilotConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers">ResetCleanupDeadServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration">ResetDisableUpgradeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold">ResetLastContactThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs">ResetMaxTrailingLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag">ResetRedundancyZoneTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime">ResetServerStabilizationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag">ResetUpgradeVersionTag</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCleanupDeadServers` <a name="ResetCleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers"></a>

```go
func ResetCleanupDeadServers()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter"></a>

```go
func ResetDatacenter()
```

##### `ResetDisableUpgradeMigration` <a name="ResetDisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration"></a>

```go
func ResetDisableUpgradeMigration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetLastContactThreshold` <a name="ResetLastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold"></a>

```go
func ResetLastContactThreshold()
```

##### `ResetMaxTrailingLogs` <a name="ResetMaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs"></a>

```go
func ResetMaxTrailingLogs()
```

##### `ResetRedundancyZoneTag` <a name="ResetRedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag"></a>

```go
func ResetRedundancyZoneTag()
```

##### `ResetServerStabilizationTime` <a name="ResetServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime"></a>

```go
func ResetServerStabilizationTime()
```

##### `ResetUpgradeVersionTag` <a name="ResetUpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag"></a>

```go
func ResetUpgradeVersionTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/autopilotconfig"

autopilotconfig.AutopilotConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/autopilotconfig"

autopilotconfig.AutopilotConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/autopilotconfig"

autopilotconfig.AutopilotConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/autopilotconfig"

autopilotconfig.AutopilotConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutopilotConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutopilotConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AutopilotConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput">CleanupDeadServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput">DatacenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput">DisableUpgradeMigrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput">LastContactThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput">MaxTrailingLogsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput">RedundancyZoneTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput">ServerStabilizationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput">UpgradeVersionTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold">LastContactThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag">RedundancyZoneTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag">UpgradeVersionTag</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CleanupDeadServersInput`<sup>Optional</sup> <a name="CleanupDeadServersInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput"></a>

```go
func CleanupDeadServersInput() interface{}
```

- *Type:* interface{}

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput"></a>

```go
func DatacenterInput() *string
```

- *Type:* *string

---

##### `DisableUpgradeMigrationInput`<sup>Optional</sup> <a name="DisableUpgradeMigrationInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput"></a>

```go
func DisableUpgradeMigrationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastContactThresholdInput`<sup>Optional</sup> <a name="LastContactThresholdInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput"></a>

```go
func LastContactThresholdInput() *string
```

- *Type:* *string

---

##### `MaxTrailingLogsInput`<sup>Optional</sup> <a name="MaxTrailingLogsInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput"></a>

```go
func MaxTrailingLogsInput() *f64
```

- *Type:* *f64

---

##### `RedundancyZoneTagInput`<sup>Optional</sup> <a name="RedundancyZoneTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput"></a>

```go
func RedundancyZoneTagInput() *string
```

- *Type:* *string

---

##### `ServerStabilizationTimeInput`<sup>Optional</sup> <a name="ServerStabilizationTimeInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput"></a>

```go
func ServerStabilizationTimeInput() *string
```

- *Type:* *string

---

##### `UpgradeVersionTagInput`<sup>Optional</sup> <a name="UpgradeVersionTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput"></a>

```go
func UpgradeVersionTagInput() *string
```

- *Type:* *string

---

##### `CleanupDeadServers`<sup>Required</sup> <a name="CleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers"></a>

```go
func CleanupDeadServers() interface{}
```

- *Type:* interface{}

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter"></a>

```go
func Datacenter() *string
```

- *Type:* *string

---

##### `DisableUpgradeMigration`<sup>Required</sup> <a name="DisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration"></a>

```go
func DisableUpgradeMigration() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastContactThreshold`<sup>Required</sup> <a name="LastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold"></a>

```go
func LastContactThreshold() *string
```

- *Type:* *string

---

##### `MaxTrailingLogs`<sup>Required</sup> <a name="MaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs"></a>

```go
func MaxTrailingLogs() *f64
```

- *Type:* *f64

---

##### `RedundancyZoneTag`<sup>Required</sup> <a name="RedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag"></a>

```go
func RedundancyZoneTag() *string
```

- *Type:* *string

---

##### `ServerStabilizationTime`<sup>Required</sup> <a name="ServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime"></a>

```go
func ServerStabilizationTime() *string
```

- *Type:* *string

---

##### `UpgradeVersionTag`<sup>Required</sup> <a name="UpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag"></a>

```go
func UpgradeVersionTag() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutopilotConfigConfig <a name="AutopilotConfigConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-consul-go/consul/v10/autopilotconfig"

&autopilotconfig.AutopilotConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CleanupDeadServers: interface{},
	Datacenter: *string,
	DisableUpgradeMigration: interface{},
	Id: *string,
	LastContactThreshold: *string,
	MaxTrailingLogs: *f64,
	RedundancyZoneTag: *string,
	ServerStabilizationTime: *string,
	UpgradeVersionTag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter">Datacenter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#id AutopilotConfig#id}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold">LastContactThreshold</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag">RedundancyZoneTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag">UpgradeVersionTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CleanupDeadServers`<sup>Optional</sup> <a name="CleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers"></a>

```go
CleanupDeadServers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter"></a>

```go
Datacenter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}.

---

##### `DisableUpgradeMigration`<sup>Optional</sup> <a name="DisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration"></a>

```go
DisableUpgradeMigration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#id AutopilotConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastContactThreshold`<sup>Optional</sup> <a name="LastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold"></a>

```go
LastContactThreshold *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}.

---

##### `MaxTrailingLogs`<sup>Optional</sup> <a name="MaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs"></a>

```go
MaxTrailingLogs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}.

---

##### `RedundancyZoneTag`<sup>Optional</sup> <a name="RedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag"></a>

```go
RedundancyZoneTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}.

---

##### `ServerStabilizationTime`<sup>Optional</sup> <a name="ServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime"></a>

```go
ServerStabilizationTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}.

---

##### `UpgradeVersionTag`<sup>Optional</sup> <a name="UpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag"></a>

```go
UpgradeVersionTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}.

---



