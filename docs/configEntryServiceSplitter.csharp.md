# `configEntryServiceSplitter` Submodule <a name="`configEntryServiceSplitter` Submodule" id="@cdktf/provider-consul.configEntryServiceSplitter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceSplitter <a name="ConfigEntryServiceSplitter" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter consul_config_entry_service_splitter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitter(Construct Scope, string Id, ConfigEntryServiceSplitterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig">ConfigEntryServiceSplitterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig">ConfigEntryServiceSplitterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits">PutSplits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition">ResetPartition</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSplits` <a name="PutSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits"></a>

```csharp
private void PutSplits(IResolvable|ConfigEntryServiceSplitterSplits[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.putSplits.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetMeta"></a>

```csharp
private void ResetMeta()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.resetPartition"></a>

```csharp
private void ResetPartition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceSplitter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceSplitter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceSplitter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceSplitter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConfigEntryServiceSplitter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceSplitter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceSplitter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceSplitter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits">Splits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput">MetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput">SplitsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition">Partition</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splits"></a>

```csharp
public ConfigEntryServiceSplitterSplitsList Splits { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList">ConfigEntryServiceSplitterSplitsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.metaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `SplitsInput`<sup>Optional</sup> <a name="SplitsInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.splitsInput"></a>

```csharp
public IResolvable|ConfigEntryServiceSplitterSplits[] SplitsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceSplitterConfig <a name="ConfigEntryServiceSplitterConfig" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|ConfigEntryServiceSplitterSplits[] Splits,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Meta = null,
    string Namespace = null,
    string Partition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name">Name</a></code> | <code>string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits">Splits</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]</code> | splits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the namespace to apply the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition">Partition</a></code> | <code>string</code> | Specifies the admin partition to apply the configuration entry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#name ConfigEntryServiceSplitter#name}

---

##### `Splits`<sup>Required</sup> <a name="Splits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.splits"></a>

```csharp
public IResolvable|ConfigEntryServiceSplitterSplits[] Splits { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

splits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#splits ConfigEntryServiceSplitter#splits}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#id ConfigEntryServiceSplitter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#meta ConfigEntryServiceSplitter#meta}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the namespace to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Specifies the admin partition to apply the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

### ConfigEntryServiceSplitterSplits <a name="ConfigEntryServiceSplitterSplits" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterSplits {
    string Service,
    double Weight,
    string Namespace = null,
    string Partition = null,
    ConfigEntryServiceSplitterSplitsRequestHeaders RequestHeaders = null,
    ConfigEntryServiceSplitterSplitsResponseHeaders ResponseHeaders = null,
    string ServiceSubset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service">Service</a></code> | <code>string</code> | Specifies the name of the service to resolve. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight">Weight</a></code> | <code>double</code> | Specifies the percentage of traffic sent to the set of service instances specified in the `service` field. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the namespace to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition">Partition</a></code> | <code>string</code> | Specifies the admin partition to use in the FQDN when resolving the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | request_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders">ResponseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | response_headers block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | Specifies a subset of the service to resolve. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Specifies the name of the service to resolve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#service ConfigEntryServiceSplitter#service}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Specifies the percentage of traffic sent to the set of service instances specified in the `service` field.

Each weight must be a floating integer between `0` and `100`. The smallest representable value is `.01`. The sum of weights across all splits must add up to `100`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#weight ConfigEntryServiceSplitter#weight}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the namespace to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#namespace ConfigEntryServiceSplitter#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Specifies the admin partition to use in the FQDN when resolving the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#partition ConfigEntryServiceSplitter#partition}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.requestHeaders"></a>

```csharp
public ConfigEntryServiceSplitterSplitsRequestHeaders RequestHeaders { get; set; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#request_headers ConfigEntryServiceSplitter#request_headers}

---

##### `ResponseHeaders`<sup>Optional</sup> <a name="ResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.responseHeaders"></a>

```csharp
public ConfigEntryServiceSplitterSplitsResponseHeaders ResponseHeaders { get; set; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

response_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#response_headers ConfigEntryServiceSplitter#response_headers}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; set; }
```

- *Type:* string

Specifies a subset of the service to resolve.

A service subset assigns a name to a specific subset of discoverable service instances within a datacenter, such as `version2` or `canary`. All services have an unnamed default subset that returns all healthy instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#service_subset ConfigEntryServiceSplitter#service_subset}

---

### ConfigEntryServiceSplitterSplitsRequestHeaders <a name="ConfigEntryServiceSplitterSplitsRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterSplitsRequestHeaders {
    System.Collections.Generic.IDictionary<string, string> Add = null,
    string[] Remove = null,
    System.Collections.Generic.IDictionary<string, string> Set = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add">Add</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove">Remove</a></code> | <code>string[]</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set">Set</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of one or more key-value pairs. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.add"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Add { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.remove"></a>

```csharp
public string[] Remove { get; set; }
```

- *Type:* string[]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders.property.set"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Set { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

### ConfigEntryServiceSplitterSplitsResponseHeaders <a name="ConfigEntryServiceSplitterSplitsResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterSplitsResponseHeaders {
    System.Collections.Generic.IDictionary<string, string> Add = null,
    string[] Remove = null,
    System.Collections.Generic.IDictionary<string, string> Set = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add">Add</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of one or more key-value pairs. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove">Remove</a></code> | <code>string[]</code> | Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set">Set</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of one or more key-value pairs. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.add"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Add { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the header. Use header names as the keys. Header names are not case-sensitive. If header values with the same name already exist, the value is appended and Consul applies both headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#add ConfigEntryServiceSplitter#add}

---

##### `Remove`<sup>Optional</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.remove"></a>

```csharp
public string[] Remove { get; set; }
```

- *Type:* string[]

Defines an list of headers to remove. Consul removes only headers containing exact matches. Header names are not case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#remove ConfigEntryServiceSplitter#remove}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders.property.set"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Set { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of one or more key-value pairs.

Defines a set of key-value pairs to add to the request header or to replace existing header values with. Use header names as the keys. Header names are not case-sensitive. If header values with the same names already exist, Consul replaces the header values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/resources/config_entry_service_splitter#set ConfigEntryServiceSplitter#set}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceSplitterSplitsList <a name="ConfigEntryServiceSplitterSplitsList" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterSplitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get"></a>

```csharp
private ConfigEntryServiceSplitterSplitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsList.property.internalValue"></a>

```csharp
public IResolvable|ConfigEntryServiceSplitterSplits[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>[]

---


### ConfigEntryServiceSplitterSplitsOutputReference <a name="ConfigEntryServiceSplitterSplitsOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterSplitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders">PutRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders">PutResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders">ResetResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeaders` <a name="PutRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders"></a>

```csharp
private void PutRequestHeaders(ConfigEntryServiceSplitterSplitsRequestHeaders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putRequestHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `PutResponseHeaders` <a name="PutResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders"></a>

```csharp
private void PutResponseHeaders(ConfigEntryServiceSplitterSplitsResponseHeaders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.putResponseHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetResponseHeaders` <a name="ResetResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetResponseHeaders"></a>

```csharp
private void ResetResponseHeaders()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.resetServiceSubset"></a>

```csharp
private void ResetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders">ResponseHeaders</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput">ResponseHeadersInput</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeaders"></a>

```csharp
public ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference RequestHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference">ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference</a>

---

##### `ResponseHeaders`<sup>Required</sup> <a name="ResponseHeaders" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeaders"></a>

```csharp
public ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference ResponseHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference">ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.requestHeadersInput"></a>

```csharp
public ConfigEntryServiceSplitterSplitsRequestHeaders RequestHeadersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---

##### `ResponseHeadersInput`<sup>Optional</sup> <a name="ResponseHeadersInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.responseHeadersInput"></a>

```csharp
public ConfigEntryServiceSplitterSplitsResponseHeaders ResponseHeadersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubsetInput"></a>

```csharp
public string ServiceSubsetInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ConfigEntryServiceSplitterSplits InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplits">ConfigEntryServiceSplitterSplits</a>

---


### ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetAdd"></a>

```csharp
private void ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetRemove"></a>

```csharp
private void ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.resetSet"></a>

```csharp
private void ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput">AddInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput">RemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput">SetInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add">Add</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove">Remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set">Set</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.addInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AddInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.removeInput"></a>

```csharp
public string[] RemoveInput { get; }
```

- *Type:* string[]

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.setInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SetInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.add"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Add { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.remove"></a>

```csharp
public string[] Remove { get; }
```

- *Type:* string[]

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.set"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Set { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeadersOutputReference.property.internalValue"></a>

```csharp
public ConfigEntryServiceSplitterSplitsRequestHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsRequestHeaders">ConfigEntryServiceSplitterSplitsRequestHeaders</a>

---


### ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference <a name="ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove">ResetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet">ResetSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetAdd"></a>

```csharp
private void ResetAdd()
```

##### `ResetRemove` <a name="ResetRemove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetRemove"></a>

```csharp
private void ResetRemove()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.resetSet"></a>

```csharp
private void ResetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput">AddInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput">RemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput">SetInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add">Add</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove">Remove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set">Set</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.addInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AddInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.removeInput"></a>

```csharp
public string[] RemoveInput { get; }
```

- *Type:* string[]

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.setInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SetInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.add"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Add { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.remove"></a>

```csharp
public string[] Remove { get; }
```

- *Type:* string[]

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.set"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Set { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeadersOutputReference.property.internalValue"></a>

```csharp
public ConfigEntryServiceSplitterSplitsResponseHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceSplitter.ConfigEntryServiceSplitterSplitsResponseHeaders">ConfigEntryServiceSplitterSplitsResponseHeaders</a>

---



