# `consul_autopilot_config`

Refer to the Terraform Registory for docs: [`consul_autopilot_config`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config).

# `autopilotConfig` Submodule <a name="`autopilotConfig` Submodule" id="@cdktf/provider-consul.autopilotConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutopilotConfig <a name="AutopilotConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config consul_autopilot_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AutopilotConfig(Construct Scope, string Id, AutopilotConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig">AutopilotConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig">AutopilotConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetCleanupDeadServers` <a name="ResetCleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetCleanupDeadServers"></a>

```csharp
private void ResetCleanupDeadServers()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetDisableUpgradeMigration` <a name="ResetDisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetDisableUpgradeMigration"></a>

```csharp
private void ResetDisableUpgradeMigration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastContactThreshold` <a name="ResetLastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetLastContactThreshold"></a>

```csharp
private void ResetLastContactThreshold()
```

##### `ResetMaxTrailingLogs` <a name="ResetMaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetMaxTrailingLogs"></a>

```csharp
private void ResetMaxTrailingLogs()
```

##### `ResetRedundancyZoneTag` <a name="ResetRedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetRedundancyZoneTag"></a>

```csharp
private void ResetRedundancyZoneTag()
```

##### `ResetServerStabilizationTime` <a name="ResetServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetServerStabilizationTime"></a>

```csharp
private void ResetServerStabilizationTime()
```

##### `ResetUpgradeVersionTag` <a name="ResetUpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.resetUpgradeVersionTag"></a>

```csharp
private void ResetUpgradeVersionTag()
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

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AutopilotConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AutopilotConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AutopilotConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AutopilotConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutopilotConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutopilotConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutopilotConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutopilotConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput">CleanupDeadServersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput">DisableUpgradeMigrationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput">LastContactThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput">MaxTrailingLogsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput">RedundancyZoneTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput">ServerStabilizationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput">UpgradeVersionTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold">LastContactThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag">RedundancyZoneTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag">UpgradeVersionTag</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CleanupDeadServersInput`<sup>Optional</sup> <a name="CleanupDeadServersInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServersInput"></a>

```csharp
public object CleanupDeadServersInput { get; }
```

- *Type:* object

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `DisableUpgradeMigrationInput`<sup>Optional</sup> <a name="DisableUpgradeMigrationInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigrationInput"></a>

```csharp
public object DisableUpgradeMigrationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastContactThresholdInput`<sup>Optional</sup> <a name="LastContactThresholdInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThresholdInput"></a>

```csharp
public string LastContactThresholdInput { get; }
```

- *Type:* string

---

##### `MaxTrailingLogsInput`<sup>Optional</sup> <a name="MaxTrailingLogsInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogsInput"></a>

```csharp
public double MaxTrailingLogsInput { get; }
```

- *Type:* double

---

##### `RedundancyZoneTagInput`<sup>Optional</sup> <a name="RedundancyZoneTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTagInput"></a>

```csharp
public string RedundancyZoneTagInput { get; }
```

- *Type:* string

---

##### `ServerStabilizationTimeInput`<sup>Optional</sup> <a name="ServerStabilizationTimeInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTimeInput"></a>

```csharp
public string ServerStabilizationTimeInput { get; }
```

- *Type:* string

---

##### `UpgradeVersionTagInput`<sup>Optional</sup> <a name="UpgradeVersionTagInput" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTagInput"></a>

```csharp
public string UpgradeVersionTagInput { get; }
```

- *Type:* string

---

##### `CleanupDeadServers`<sup>Required</sup> <a name="CleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.cleanupDeadServers"></a>

```csharp
public object CleanupDeadServers { get; }
```

- *Type:* object

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `DisableUpgradeMigration`<sup>Required</sup> <a name="DisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.disableUpgradeMigration"></a>

```csharp
public object DisableUpgradeMigration { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastContactThreshold`<sup>Required</sup> <a name="LastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.lastContactThreshold"></a>

```csharp
public string LastContactThreshold { get; }
```

- *Type:* string

---

##### `MaxTrailingLogs`<sup>Required</sup> <a name="MaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.maxTrailingLogs"></a>

```csharp
public double MaxTrailingLogs { get; }
```

- *Type:* double

---

##### `RedundancyZoneTag`<sup>Required</sup> <a name="RedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.redundancyZoneTag"></a>

```csharp
public string RedundancyZoneTag { get; }
```

- *Type:* string

---

##### `ServerStabilizationTime`<sup>Required</sup> <a name="ServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.serverStabilizationTime"></a>

```csharp
public string ServerStabilizationTime { get; }
```

- *Type:* string

---

##### `UpgradeVersionTag`<sup>Required</sup> <a name="UpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.upgradeVersionTag"></a>

```csharp
public string UpgradeVersionTag { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutopilotConfigConfig <a name="AutopilotConfigConfig" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AutopilotConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object CleanupDeadServers = null,
    string Datacenter = null,
    object DisableUpgradeMigration = null,
    string Id = null,
    string LastContactThreshold = null,
    double MaxTrailingLogs = null,
    string RedundancyZoneTag = null,
    string ServerStabilizationTime = null,
    string UpgradeVersionTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers">CleanupDeadServers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration">DisableUpgradeMigration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold">LastContactThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs">MaxTrailingLogs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag">RedundancyZoneTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime">ServerStabilizationTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}. |
| <code><a href="#@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag">UpgradeVersionTag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CleanupDeadServers`<sup>Optional</sup> <a name="CleanupDeadServers" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.cleanupDeadServers"></a>

```csharp
public object CleanupDeadServers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#cleanup_dead_servers AutopilotConfig#cleanup_dead_servers}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#datacenter AutopilotConfig#datacenter}.

---

##### `DisableUpgradeMigration`<sup>Optional</sup> <a name="DisableUpgradeMigration" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.disableUpgradeMigration"></a>

```csharp
public object DisableUpgradeMigration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#disable_upgrade_migration AutopilotConfig#disable_upgrade_migration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#id AutopilotConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastContactThreshold`<sup>Optional</sup> <a name="LastContactThreshold" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.lastContactThreshold"></a>

```csharp
public string LastContactThreshold { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#last_contact_threshold AutopilotConfig#last_contact_threshold}.

---

##### `MaxTrailingLogs`<sup>Optional</sup> <a name="MaxTrailingLogs" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.maxTrailingLogs"></a>

```csharp
public double MaxTrailingLogs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#max_trailing_logs AutopilotConfig#max_trailing_logs}.

---

##### `RedundancyZoneTag`<sup>Optional</sup> <a name="RedundancyZoneTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.redundancyZoneTag"></a>

```csharp
public string RedundancyZoneTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#redundancy_zone_tag AutopilotConfig#redundancy_zone_tag}.

---

##### `ServerStabilizationTime`<sup>Optional</sup> <a name="ServerStabilizationTime" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.serverStabilizationTime"></a>

```csharp
public string ServerStabilizationTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#server_stabilization_time AutopilotConfig#server_stabilization_time}.

---

##### `UpgradeVersionTag`<sup>Optional</sup> <a name="UpgradeVersionTag" id="@cdktf/provider-consul.autopilotConfig.AutopilotConfigConfig.property.upgradeVersionTag"></a>

```csharp
public string UpgradeVersionTag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/autopilot_config#upgrade_version_tag AutopilotConfig#upgrade_version_tag}.

---



