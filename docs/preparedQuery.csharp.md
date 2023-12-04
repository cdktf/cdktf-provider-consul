# `preparedQuery` Submodule <a name="`preparedQuery` Submodule" id="@cdktf/provider-consul.preparedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PreparedQuery <a name="PreparedQuery" id="@cdktf/provider-consul.preparedQuery.PreparedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query consul_prepared_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQuery(Construct Scope, string Id, PreparedQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig">PreparedQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig">PreparedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover">PutFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect">ResetConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds">ResetIgnoreCheckIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear">ResetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta">ResetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing">ResetOnlyPassing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta">ResetServiceMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession">ResetSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken">ResetStoredToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDns` <a name="PutDns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns"></a>

```csharp
private void PutDns(PreparedQueryDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---

##### `PutFailover` <a name="PutFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover"></a>

```csharp
private void PutFailover(PreparedQueryFailover Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate"></a>

```csharp
private void PutTemplate(PreparedQueryTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---

##### `ResetConnect` <a name="ResetConnect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect"></a>

```csharp
private void ResetConnect()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns"></a>

```csharp
private void ResetDns()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover"></a>

```csharp
private void ResetFailover()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreCheckIds` <a name="ResetIgnoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds"></a>

```csharp
private void ResetIgnoreCheckIds()
```

##### `ResetNear` <a name="ResetNear" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear"></a>

```csharp
private void ResetNear()
```

##### `ResetNodeMeta` <a name="ResetNodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta"></a>

```csharp
private void ResetNodeMeta()
```

##### `ResetOnlyPassing` <a name="ResetOnlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing"></a>

```csharp
private void ResetOnlyPassing()
```

##### `ResetServiceMeta` <a name="ResetServiceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta"></a>

```csharp
private void ResetServiceMeta()
```

##### `ResetSession` <a name="ResetSession" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession"></a>

```csharp
private void ResetSession()
```

##### `ResetStoredToken` <a name="ResetStoredToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken"></a>

```csharp
private void ResetStoredToken()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate"></a>

```csharp
private void ResetTemplate()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PreparedQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

PreparedQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

PreparedQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

PreparedQuery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

PreparedQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PreparedQuery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PreparedQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PreparedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PreparedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover">Failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template">Template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput">ConnectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput">FailoverInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput">IgnoreCheckIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput">NearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput">NodeMetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput">OnlyPassingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput">ServiceMetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput">SessionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput">StoredTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect">Connect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds">IgnoreCheckIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near">Near</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta">NodeMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing">OnlyPassing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta">ServiceMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session">Session</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken">StoredToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns"></a>

```csharp
public PreparedQueryDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a>

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover"></a>

```csharp
public PreparedQueryFailoverOutputReference Failover { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template"></a>

```csharp
public PreparedQueryTemplateOutputReference Template { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a>

---

##### `ConnectInput`<sup>Optional</sup> <a name="ConnectInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput"></a>

```csharp
public object ConnectInput { get; }
```

- *Type:* object

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput"></a>

```csharp
public PreparedQueryDns DnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput"></a>

```csharp
public PreparedQueryFailover FailoverInput { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreCheckIdsInput`<sup>Optional</sup> <a name="IgnoreCheckIdsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput"></a>

```csharp
public string[] IgnoreCheckIdsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NearInput`<sup>Optional</sup> <a name="NearInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput"></a>

```csharp
public string NearInput { get; }
```

- *Type:* string

---

##### `NodeMetaInput`<sup>Optional</sup> <a name="NodeMetaInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnlyPassingInput`<sup>Optional</sup> <a name="OnlyPassingInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput"></a>

```csharp
public object OnlyPassingInput { get; }
```

- *Type:* object

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServiceMetaInput`<sup>Optional</sup> <a name="ServiceMetaInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceMetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SessionInput`<sup>Optional</sup> <a name="SessionInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput"></a>

```csharp
public string SessionInput { get; }
```

- *Type:* string

---

##### `StoredTokenInput`<sup>Optional</sup> <a name="StoredTokenInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput"></a>

```csharp
public string StoredTokenInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput"></a>

```csharp
public PreparedQueryTemplate TemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect"></a>

```csharp
public object Connect { get; }
```

- *Type:* object

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreCheckIds`<sup>Required</sup> <a name="IgnoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds"></a>

```csharp
public string[] IgnoreCheckIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Near`<sup>Required</sup> <a name="Near" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near"></a>

```csharp
public string Near { get; }
```

- *Type:* string

---

##### `NodeMeta`<sup>Required</sup> <a name="NodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMeta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnlyPassing`<sup>Required</sup> <a name="OnlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing"></a>

```csharp
public object OnlyPassing { get; }
```

- *Type:* object

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceMeta`<sup>Required</sup> <a name="ServiceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceMeta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Session`<sup>Required</sup> <a name="Session" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session"></a>

```csharp
public string Session { get; }
```

- *Type:* string

---

##### `StoredToken`<sup>Required</sup> <a name="StoredToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken"></a>

```csharp
public string StoredToken { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PreparedQueryConfig <a name="PreparedQueryConfig" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Service,
    object Connect = null,
    string Datacenter = null,
    PreparedQueryDns Dns = null,
    PreparedQueryFailover Failover = null,
    string Id = null,
    string[] IgnoreCheckIds = null,
    string Near = null,
    System.Collections.Generic.IDictionary<string, string> NodeMeta = null,
    object OnlyPassing = null,
    System.Collections.Generic.IDictionary<string, string> ServiceMeta = null,
    string Session = null,
    string StoredToken = null,
    string[] Tags = null,
    PreparedQueryTemplate Template = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name">Name</a></code> | <code>string</code> | The name of the prepared query. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service">Service</a></code> | <code>string</code> | The name of the service to query. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect">Connect</a></code> | <code>object</code> | When `true` the prepared query will return connect proxy services for a queried service. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover">Failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#id PreparedQuery#id}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds">IgnoreCheckIds</a></code> | <code>string[]</code> | Specifies a list of check IDs that should be ignored when filtering unhealthy instances. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near">Near</a></code> | <code>string</code> | Allows specifying the name of a node to sort results near using Consul's distance sorting and network coordinates. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta">NodeMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies a list of user-defined key/value pairs that will be used for filtering the query results to nodes with the given metadata values present. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing">OnlyPassing</a></code> | <code>object</code> | When `true`, the prepared query will only return nodes with passing health checks in the result. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta">ServiceMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies a list of user-defined key/value pairs that will be used for filtering the query results to services with the given metadata values present. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session">Session</a></code> | <code>string</code> | The name of the Consul session to tie this query's lifetime to. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken">StoredToken</a></code> | <code>string</code> | The ACL token to store with the prepared query. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags">Tags</a></code> | <code>string[]</code> | The list of required and/or disallowed tags. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token">Token</a></code> | <code>string</code> | The ACL token to use when saving the prepared query. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the prepared query.

Used to identify the prepared query during requests. Can be specified as an empty string to configure the query as a catch-all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#name PreparedQuery#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#service PreparedQuery#service}

---

##### `Connect`<sup>Optional</sup> <a name="Connect" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect"></a>

```csharp
public object Connect { get; set; }
```

- *Type:* object

When `true` the prepared query will return connect proxy services for a queried service.

Conditions such as `tags` in the prepared query will be matched against the proxy service. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#connect PreparedQuery#connect}

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#datacenter PreparedQuery#datacenter}

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns"></a>

```csharp
public PreparedQueryDns Dns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#dns PreparedQuery#dns}

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover"></a>

```csharp
public PreparedQueryFailover Failover { get; set; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#failover PreparedQuery#failover}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#id PreparedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreCheckIds`<sup>Optional</sup> <a name="IgnoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds"></a>

```csharp
public string[] IgnoreCheckIds { get; set; }
```

- *Type:* string[]

Specifies a list of check IDs that should be ignored when filtering unhealthy instances.

This is mostly useful in an emergency or as a temporary measure when a health check is found to be unreliable. Being able to ignore it in centrally-defined queries can be simpler than de-registering the check as an interim solution until the check can be fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}

---

##### `Near`<sup>Optional</sup> <a name="Near" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near"></a>

```csharp
public string Near { get; set; }
```

- *Type:* string

Allows specifying the name of a node to sort results near using Consul's distance sorting and network coordinates.

The magic `_agent` value can be used to always sort nearest the node servicing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#near PreparedQuery#near}

---

##### `NodeMeta`<sup>Optional</sup> <a name="NodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMeta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies a list of user-defined key/value pairs that will be used for filtering the query results to nodes with the given metadata values present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#node_meta PreparedQuery#node_meta}

---

##### `OnlyPassing`<sup>Optional</sup> <a name="OnlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing"></a>

```csharp
public object OnlyPassing { get; set; }
```

- *Type:* object

When `true`, the prepared query will only return nodes with passing health checks in the result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#only_passing PreparedQuery#only_passing}

---

##### `ServiceMeta`<sup>Optional</sup> <a name="ServiceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceMeta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies a list of user-defined key/value pairs that will be used for filtering the query results to services with the given metadata values present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#service_meta PreparedQuery#service_meta}

---

##### `Session`<sup>Optional</sup> <a name="Session" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session"></a>

```csharp
public string Session { get; set; }
```

- *Type:* string

The name of the Consul session to tie this query's lifetime to.

This is an advanced parameter that should not be used without a complete understanding of Consul sessions and the implications of their use (it is recommended to leave this blank in nearly all cases).  If this parameter is omitted the query will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#session PreparedQuery#session}

---

##### `StoredToken`<sup>Optional</sup> <a name="StoredToken" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken"></a>

```csharp
public string StoredToken { get; set; }
```

- *Type:* string

The ACL token to store with the prepared query.

This token will be used by default whenever the query is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#stored_token PreparedQuery#stored_token}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The list of required and/or disallowed tags.

If a tag is in this list it must be present.  If the tag is preceded with a "!" then it is disallowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#tags PreparedQuery#tags}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template"></a>

```csharp
public PreparedQueryTemplate Template { get; set; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#template PreparedQuery#template}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The ACL token to use when saving the prepared query.

This overrides the token that the agent provides by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#token PreparedQuery#token}

---

### PreparedQueryDns <a name="PreparedQueryDns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryDns {
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl">Ttl</a></code> | <code>string</code> | The TTL to send when returning DNS results. |

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL to send when returning DNS results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#ttl PreparedQuery#ttl}

---

### PreparedQueryFailover <a name="PreparedQueryFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryFailover {
    string[] Datacenters = null,
    double NearestN = null,
    object Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters">Datacenters</a></code> | <code>string[]</code> | Remote datacenters to return results from. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN">NearestN</a></code> | <code>double</code> | Return results from this many datacenters, sorted in ascending order of estimated RTT. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.targets">Targets</a></code> | <code>object</code> | targets block. |

---

##### `Datacenters`<sup>Optional</sup> <a name="Datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters"></a>

```csharp
public string[] Datacenters { get; set; }
```

- *Type:* string[]

Remote datacenters to return results from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#datacenters PreparedQuery#datacenters}

---

##### `NearestN`<sup>Optional</sup> <a name="NearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN"></a>

```csharp
public double NearestN { get; set; }
```

- *Type:* double

Return results from this many datacenters, sorted in ascending order of estimated RTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#nearest_n PreparedQuery#nearest_n}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.targets"></a>

```csharp
public object Targets { get; set; }
```

- *Type:* object

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#targets PreparedQuery#targets}

---

### PreparedQueryFailoverTargets <a name="PreparedQueryFailoverTargets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryFailoverTargets {
    string Datacenter = null,
    string Peer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.datacenter">Datacenter</a></code> | <code>string</code> | Specifies a WAN federated datacenter to forward the query to. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.peer">Peer</a></code> | <code>string</code> | Specifies a cluster peer to use for failover. |

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Specifies a WAN federated datacenter to forward the query to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#datacenter PreparedQuery#datacenter}

---

##### `Peer`<sup>Optional</sup> <a name="Peer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargets.property.peer"></a>

```csharp
public string Peer { get; set; }
```

- *Type:* string

Specifies a cluster peer to use for failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#peer PreparedQuery#peer}

---

### PreparedQueryTemplate <a name="PreparedQueryTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryTemplate {
    string Regexp,
    string Type,
    object RemoveEmptyTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp">Regexp</a></code> | <code>string</code> | The regular expression to match with. When using `name_prefix_match`, this regex is applied against the query name. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type">Type</a></code> | <code>string</code> | The type of template matching to perform. Currently only `name_prefix_match` is supported. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.removeEmptyTags">RemoveEmptyTags</a></code> | <code>object</code> | If set to true, will cause the tags list inside the service structure to be stripped of any empty strings. |

---

##### `Regexp`<sup>Required</sup> <a name="Regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp"></a>

```csharp
public string Regexp { get; set; }
```

- *Type:* string

The regular expression to match with. When using `name_prefix_match`, this regex is applied against the query name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#regexp PreparedQuery#regexp}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of template matching to perform. Currently only `name_prefix_match` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#type PreparedQuery#type}

---

##### `RemoveEmptyTags`<sup>Optional</sup> <a name="RemoveEmptyTags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.removeEmptyTags"></a>

```csharp
public object RemoveEmptyTags { get; set; }
```

- *Type:* object

If set to true, will cause the tags list inside the service structure to be stripped of any empty strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/prepared_query#remove_empty_tags PreparedQuery#remove_empty_tags}

---

## Classes <a name="Classes" id="Classes"></a>

### PreparedQueryDnsOutputReference <a name="PreparedQueryDnsOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue"></a>

```csharp
public PreparedQueryDns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---


### PreparedQueryFailoverOutputReference <a name="PreparedQueryFailoverOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryFailoverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters">ResetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN">ResetNearestN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.putTargets"></a>

```csharp
private void PutTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.putTargets.parameter.value"></a>

- *Type:* object

---

##### `ResetDatacenters` <a name="ResetDatacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters"></a>

```csharp
private void ResetDatacenters()
```

##### `ResetNearestN` <a name="ResetNearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN"></a>

```csharp
private void ResetNearestN()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList">PreparedQueryFailoverTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput">DatacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput">NearestNInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targetsInput">TargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters">Datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN">NearestN</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targets"></a>

```csharp
public PreparedQueryFailoverTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList">PreparedQueryFailoverTargetsList</a>

---

##### `DatacentersInput`<sup>Optional</sup> <a name="DatacentersInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput"></a>

```csharp
public string[] DatacentersInput { get; }
```

- *Type:* string[]

---

##### `NearestNInput`<sup>Optional</sup> <a name="NearestNInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput"></a>

```csharp
public double NearestNInput { get; }
```

- *Type:* double

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.targetsInput"></a>

```csharp
public object TargetsInput { get; }
```

- *Type:* object

---

##### `Datacenters`<sup>Required</sup> <a name="Datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters"></a>

```csharp
public string[] Datacenters { get; }
```

- *Type:* string[]

---

##### `NearestN`<sup>Required</sup> <a name="NearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN"></a>

```csharp
public double NearestN { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue"></a>

```csharp
public PreparedQueryFailover InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---


### PreparedQueryFailoverTargetsList <a name="PreparedQueryFailoverTargetsList" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryFailoverTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.get"></a>

```csharp
private PreparedQueryFailoverTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PreparedQueryFailoverTargetsOutputReference <a name="PreparedQueryFailoverTargetsOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryFailoverTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetPeer">ResetPeer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetPeer` <a name="ResetPeer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.resetPeer"></a>

```csharp
private void ResetPeer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peerInput">PeerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peer">Peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `PeerInput`<sup>Optional</sup> <a name="PeerInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peerInput"></a>

```csharp
public string PeerInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Peer`<sup>Required</sup> <a name="Peer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.peer"></a>

```csharp
public string Peer { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PreparedQueryTemplateOutputReference <a name="PreparedQueryTemplateOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new PreparedQueryTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resetRemoveEmptyTags">ResetRemoveEmptyTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRemoveEmptyTags` <a name="ResetRemoveEmptyTags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resetRemoveEmptyTags"></a>

```csharp
private void ResetRemoveEmptyTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput">RegexpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTagsInput">RemoveEmptyTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp">Regexp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTags">RemoveEmptyTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexpInput`<sup>Optional</sup> <a name="RegexpInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput"></a>

```csharp
public string RegexpInput { get; }
```

- *Type:* string

---

##### `RemoveEmptyTagsInput`<sup>Optional</sup> <a name="RemoveEmptyTagsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTagsInput"></a>

```csharp
public object RemoveEmptyTagsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Regexp`<sup>Required</sup> <a name="Regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp"></a>

```csharp
public string Regexp { get; }
```

- *Type:* string

---

##### `RemoveEmptyTags`<sup>Required</sup> <a name="RemoveEmptyTags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.removeEmptyTags"></a>

```csharp
public object RemoveEmptyTags { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue"></a>

```csharp
public PreparedQueryTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---



