# `configEntryServiceResolver` Submodule <a name="`configEntryServiceResolver` Submodule" id="@cdktf/provider-consul.configEntryServiceResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceResolver <a name="ConfigEntryServiceResolver" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver consul_config_entry_service_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolver(Construct Scope, string Id, ConfigEntryServiceResolverConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig">ConfigEntryServiceResolverConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig">ConfigEntryServiceResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover">PutFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets">PutSubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset">ResetDefaultSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets">ResetSubsets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFailover` <a name="PutFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover"></a>

```csharp
private void PutFailover(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover.parameter.value"></a>

- *Type:* object

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer.parameter.value"></a>

- *Type:* object

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect"></a>

```csharp
private void PutRedirect(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect.parameter.value"></a>

- *Type:* object

---

##### `PutSubsets` <a name="PutSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets"></a>

```csharp
private void PutSubsets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets.parameter.value"></a>

- *Type:* object

---

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetDefaultSubset` <a name="ResetDefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset"></a>

```csharp
private void ResetDefaultSubset()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover"></a>

```csharp
private void ResetFailover()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta"></a>

```csharp
private void ResetMeta()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect"></a>

```csharp
private void ResetRedirect()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout"></a>

```csharp
private void ResetRequestTimeout()
```

##### `ResetSubsets` <a name="ResetSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets"></a>

```csharp
private void ResetSubsets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceResolver.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceResolver.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceResolver.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceResolver.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceResolver to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover">Failover</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets">Subsets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput">DefaultSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput">FailoverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput">MetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput">RedirectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput">SubsetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset">DefaultSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout">RequestTimeout</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover"></a>

```csharp
public ConfigEntryServiceResolverFailoverList Failover { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer"></a>

```csharp
public ConfigEntryServiceResolverLoadBalancerList LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect"></a>

```csharp
public ConfigEntryServiceResolverRedirectList Redirect { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a>

---

##### `Subsets`<sup>Required</sup> <a name="Subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets"></a>

```csharp
public ConfigEntryServiceResolverSubsetsList Subsets { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a>

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput"></a>

```csharp
public string ConnectTimeoutInput { get; }
```

- *Type:* string

---

##### `DefaultSubsetInput`<sup>Optional</sup> <a name="DefaultSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput"></a>

```csharp
public string DefaultSubsetInput { get; }
```

- *Type:* string

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput"></a>

```csharp
public object FailoverInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput"></a>

```csharp
public object LoadBalancerInput { get; }
```

- *Type:* object

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput"></a>

```csharp
public object RedirectInput { get; }
```

- *Type:* object

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput"></a>

```csharp
public string RequestTimeoutInput { get; }
```

- *Type:* string

---

##### `SubsetsInput`<sup>Optional</sup> <a name="SubsetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput"></a>

```csharp
public object SubsetsInput { get; }
```

- *Type:* object

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; }
```

- *Type:* string

---

##### `DefaultSubset`<sup>Required</sup> <a name="DefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset"></a>

```csharp
public string DefaultSubset { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `RequestTimeout`<sup>Required</sup> <a name="RequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout"></a>

```csharp
public string RequestTimeout { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceResolverConfig <a name="ConfigEntryServiceResolverConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ConnectTimeout = null,
    string DefaultSubset = null,
    object Failover = null,
    string Id = null,
    object LoadBalancer = null,
    System.Collections.Generic.IDictionary<string, string> Meta = null,
    string Namespace = null,
    string Partition = null,
    object Redirect = null,
    string RequestTimeout = null,
    object Subsets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name">Name</a></code> | <code>string</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout">ConnectTimeout</a></code> | <code>string</code> | Specifies the timeout duration for establishing new network connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset">DefaultSubset</a></code> | <code>string</code> | Specifies a defined subset of service instances to use when no explicit subset is requested. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover">Failover</a></code> | <code>object</code> | failover block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer">LoadBalancer</a></code> | <code>object</code> | load_balancer block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the namespace that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition">Partition</a></code> | <code>string</code> | Specifies the admin partition that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect">Redirect</a></code> | <code>object</code> | redirect block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout">RequestTimeout</a></code> | <code>string</code> | Specifies the timeout duration for receiving an HTTP response from this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets">Subsets</a></code> | <code>object</code> | subsets block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout"></a>

```csharp
public string ConnectTimeout { get; set; }
```

- *Type:* string

Specifies the timeout duration for establishing new network connections to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}

---

##### `DefaultSubset`<sup>Optional</sup> <a name="DefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset"></a>

```csharp
public string DefaultSubset { get; set; }
```

- *Type:* string

Specifies a defined subset of service instances to use when no explicit subset is requested.

If this parameter is not specified, Consul uses the unnamed default subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover"></a>

```csharp
public object Failover { get; set; }
```

- *Type:* object

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer"></a>

```csharp
public object LoadBalancer { get; set; }
```

- *Type:* object

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the namespace that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Specifies the admin partition that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect"></a>

```csharp
public object Redirect { get; set; }
```

- *Type:* object

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout"></a>

```csharp
public string RequestTimeout { get; set; }
```

- *Type:* string

Specifies the timeout duration for receiving an HTTP response from this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}

---

##### `Subsets`<sup>Optional</sup> <a name="Subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets"></a>

```csharp
public object Subsets { get; set; }
```

- *Type:* object

subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}

---

### ConfigEntryServiceResolverFailover <a name="ConfigEntryServiceResolverFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverFailover {
    string SubsetName,
    string[] Datacenters = null,
    string Namespace = null,
    string SamenessGroup = null,
    string Service = null,
    string ServiceSubset = null,
    object Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName">SubsetName</a></code> | <code>string</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters">Datacenters</a></code> | <code>string[]</code> | Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the namespace at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup">SamenessGroup</a></code> | <code>string</code> | Specifies the sameness group at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service">Service</a></code> | <code>string</code> | Specifies the name of the service to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets">Targets</a></code> | <code>object</code> | targets block. |

---

##### `SubsetName`<sup>Required</sup> <a name="SubsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName"></a>

```csharp
public string SubsetName { get; set; }
```

- *Type:* string

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#subset_name ConfigEntryServiceResolver#subset_name}

---

##### `Datacenters`<sup>Optional</sup> <a name="Datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters"></a>

```csharp
public string[] Datacenters { get; set; }
```

- *Type:* string[]

Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario.

When Consul cannot establish a connection with the first datacenter in the list, it proceeds sequentially until establishing a connection with another datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenters ConfigEntryServiceResolver#datacenters}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the namespace at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `SamenessGroup`<sup>Optional</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup"></a>

```csharp
public string SamenessGroup { get; set; }
```

- *Type:* string

Specifies the sameness group at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Specifies the name of the service to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; set; }
```

- *Type:* string

Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets"></a>

```csharp
public object Targets { get; set; }
```

- *Type:* object

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#targets ConfigEntryServiceResolver#targets}

---

### ConfigEntryServiceResolverFailoverTargets <a name="ConfigEntryServiceResolverFailoverTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverFailoverTargets {
    string Datacenter = null,
    string Namespace = null,
    string Partition = null,
    string Peer = null,
    string Service = null,
    string ServiceSubset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter">Datacenter</a></code> | <code>string</code> | Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the namespace to use for the failover target. If empty, the default namespace is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition">Partition</a></code> | <code>string</code> | Specifies the admin partition within the same datacenter to use for the failover target. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer">Peer</a></code> | <code>string</code> | Specifies the destination cluster peer to resolve the target service name from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service">Service</a></code> | <code>string</code> | Specifies the service name to use for the failover target. If empty, the current service name is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | Specifies the named subset to use for the failover target. |

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the namespace to use for the failover target. If empty, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Specifies the admin partition within the same datacenter to use for the failover target.

If empty, the default partition is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `Peer`<sup>Optional</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer"></a>

```csharp
public string Peer { get; set; }
```

- *Type:* string

Specifies the destination cluster peer to resolve the target service name from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Specifies the service name to use for the failover target. If empty, the current service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; set; }
```

- *Type:* string

Specifies the named subset to use for the failover target.

If empty, the default subset for the requested service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverLoadBalancer <a name="ConfigEntryServiceResolverLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancer {
    object HashPolicies = null,
    object LeastRequestConfig = null,
    string Policy = null,
    object RingHashConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies">HashPolicies</a></code> | <code>object</code> | hash_policies block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig">LeastRequestConfig</a></code> | <code>object</code> | least_request_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy">Policy</a></code> | <code>string</code> | Specifies the type of load balancing policy for selecting a host. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig">RingHashConfig</a></code> | <code>object</code> | ring_hash_config block. |

---

##### `HashPolicies`<sup>Optional</sup> <a name="HashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies"></a>

```csharp
public object HashPolicies { get; set; }
```

- *Type:* object

hash_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#hash_policies ConfigEntryServiceResolver#hash_policies}

---

##### `LeastRequestConfig`<sup>Optional</sup> <a name="LeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig"></a>

```csharp
public object LeastRequestConfig { get; set; }
```

- *Type:* object

least_request_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#least_request_config ConfigEntryServiceResolver#least_request_config}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Specifies the type of load balancing policy for selecting a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#policy ConfigEntryServiceResolver#policy}

---

##### `RingHashConfig`<sup>Optional</sup> <a name="RingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig"></a>

```csharp
public object RingHashConfig { get; set; }
```

- *Type:* object

ring_hash_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#ring_hash_config ConfigEntryServiceResolver#ring_hash_config}

---

### ConfigEntryServiceResolverLoadBalancerHashPolicies <a name="ConfigEntryServiceResolverLoadBalancerHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerHashPolicies {
    object CookieConfig = null,
    string Field = null,
    string FieldValue = null,
    object SourceIp = null,
    object Terminal = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig">CookieConfig</a></code> | <code>object</code> | cookie_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field">Field</a></code> | <code>string</code> | Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue">FieldValue</a></code> | <code>string</code> | Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp">SourceIp</a></code> | <code>object</code> | Determines if the hash type should be source IP address. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal">Terminal</a></code> | <code>object</code> | Determines if Consul should stop computing the hash when multiple hash policies are present. |

---

##### `CookieConfig`<sup>Optional</sup> <a name="CookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig"></a>

```csharp
public object CookieConfig { get; set; }
```

- *Type:* object

cookie_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#cookie_config ConfigEntryServiceResolver#cookie_config}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#field ConfigEntryServiceResolver#field}

---

##### `FieldValue`<sup>Optional</sup> <a name="FieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue"></a>

```csharp
public string FieldValue { get; set; }
```

- *Type:* string

Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#field_value ConfigEntryServiceResolver#field_value}

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp"></a>

```csharp
public object SourceIp { get; set; }
```

- *Type:* object

Determines if the hash type should be source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#source_ip ConfigEntryServiceResolver#source_ip}

---

##### `Terminal`<sup>Optional</sup> <a name="Terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal"></a>

```csharp
public object Terminal { get; set; }
```

- *Type:* object

Determines if Consul should stop computing the hash when multiple hash policies are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#terminal ConfigEntryServiceResolver#terminal}

---

### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig {
    string Path = null,
    object Session = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path">Path</a></code> | <code>string</code> | Specifies the path to set for the cookie. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session">Session</a></code> | <code>object</code> | Directs Consul to generate a session cookie with no expiration. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl">Ttl</a></code> | <code>string</code> | Specifies the TTL for generated cookies. Cannot be specified for session cookies. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Specifies the path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#path ConfigEntryServiceResolver#path}

---

##### `Session`<sup>Optional</sup> <a name="Session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session"></a>

```csharp
public object Session { get; set; }
```

- *Type:* object

Directs Consul to generate a session cookie with no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#session ConfigEntryServiceResolver#session}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

Specifies the TTL for generated cookies. Cannot be specified for session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#ttl ConfigEntryServiceResolver#ttl}

---

### ConfigEntryServiceResolverLoadBalancerLeastRequestConfig <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerLeastRequestConfig {
    double ChoiceCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount">ChoiceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}. |

---

##### `ChoiceCount`<sup>Optional</sup> <a name="ChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount"></a>

```csharp
public double ChoiceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}.

---

### ConfigEntryServiceResolverLoadBalancerRingHashConfig <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerRingHashConfig {
    double MaximumRingSize = null,
    double MinimumRingSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize">MaximumRingSize</a></code> | <code>double</code> | Determines the maximum number of entries in the hash ring. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize">MinimumRingSize</a></code> | <code>double</code> | Determines the minimum number of entries in the hash ring. |

---

##### `MaximumRingSize`<sup>Optional</sup> <a name="MaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize"></a>

```csharp
public double MaximumRingSize { get; set; }
```

- *Type:* double

Determines the maximum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#maximum_ring_size ConfigEntryServiceResolver#maximum_ring_size}

---

##### `MinimumRingSize`<sup>Optional</sup> <a name="MinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize"></a>

```csharp
public double MinimumRingSize { get; set; }
```

- *Type:* double

Determines the minimum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#minimum_ring_size ConfigEntryServiceResolver#minimum_ring_size}

---

### ConfigEntryServiceResolverRedirect <a name="ConfigEntryServiceResolverRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverRedirect {
    string Datacenter = null,
    string Namespace = null,
    string Partition = null,
    string Peer = null,
    string SamenessGroup = null,
    string Service = null,
    string ServiceSubset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter">Datacenter</a></code> | <code>string</code> | Specifies the datacenter at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the namespace at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition">Partition</a></code> | <code>string</code> | Specifies the admin partition at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer">Peer</a></code> | <code>string</code> | Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup">SamenessGroup</a></code> | <code>string</code> | Specifies the sameness group at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service">Service</a></code> | <code>string</code> | Specifies the name of a service at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests. |

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Specifies the datacenter at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the namespace at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Specifies the admin partition at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `Peer`<sup>Optional</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer"></a>

```csharp
public string Peer { get; set; }
```

- *Type:* string

Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `SamenessGroup`<sup>Optional</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup"></a>

```csharp
public string SamenessGroup { get; set; }
```

- *Type:* string

Specifies the sameness group at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Specifies the name of a service at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `ServiceSubset`<sup>Optional</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; set; }
```

- *Type:* string

Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests.

If empty, the default subset is used. If specified, you must also specify at least one of the following in the same Redirect map: Service, Namespace, andDatacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverSubsets <a name="ConfigEntryServiceResolverSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverSubsets {
    string Filter,
    string Name,
    object OnlyPassing
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter">Filter</a></code> | <code>string</code> | Specifies an expression that filters the DNS elements of service instances that belong to the subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name">Name</a></code> | <code>string</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing">OnlyPassing</a></code> | <code>object</code> | Determines if instances that return a warning from a health check are allowed to resolve a request. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Specifies an expression that filters the DNS elements of service instances that belong to the subset.

If empty, all healthy instances of a service are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#filter ConfigEntryServiceResolver#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `OnlyPassing`<sup>Required</sup> <a name="OnlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing"></a>

```csharp
public object OnlyPassing { get; set; }
```

- *Type:* object

Determines if instances that return a warning from a health check are allowed to resolve a request.

When set to false, instances with passing and warning states are considered healthy. When set to true, only instances with a passing health check state are considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/config_entry_service_resolver#only_passing ConfigEntryServiceResolver#only_passing}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceResolverFailoverList <a name="ConfigEntryServiceResolverFailoverList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverFailoverList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get"></a>

```csharp
private ConfigEntryServiceResolverFailoverOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverFailoverOutputReference <a name="ConfigEntryServiceResolverFailoverOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverFailoverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters">ResetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup">ResetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets"></a>

```csharp
private void PutTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets.parameter.value"></a>

- *Type:* object

---

##### `ResetDatacenters` <a name="ResetDatacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters"></a>

```csharp
private void ResetDatacenters()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSamenessGroup` <a name="ResetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup"></a>

```csharp
private void ResetSamenessGroup()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset"></a>

```csharp
private void ResetServiceSubset()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput">DatacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput">SamenessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput">SubsetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput">TargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters">Datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup">SamenessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName">SubsetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets"></a>

```csharp
public ConfigEntryServiceResolverFailoverTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a>

---

##### `DatacentersInput`<sup>Optional</sup> <a name="DatacentersInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput"></a>

```csharp
public string[] DatacentersInput { get; }
```

- *Type:* string[]

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SamenessGroupInput`<sup>Optional</sup> <a name="SamenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput"></a>

```csharp
public string SamenessGroupInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput"></a>

```csharp
public string ServiceSubsetInput { get; }
```

- *Type:* string

---

##### `SubsetNameInput`<sup>Optional</sup> <a name="SubsetNameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput"></a>

```csharp
public string SubsetNameInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput"></a>

```csharp
public object TargetsInput { get; }
```

- *Type:* object

---

##### `Datacenters`<sup>Required</sup> <a name="Datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters"></a>

```csharp
public string[] Datacenters { get; }
```

- *Type:* string[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `SamenessGroup`<sup>Required</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup"></a>

```csharp
public string SamenessGroup { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; }
```

- *Type:* string

---

##### `SubsetName`<sup>Required</sup> <a name="SubsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName"></a>

```csharp
public string SubsetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverFailoverTargetsList <a name="ConfigEntryServiceResolverFailoverTargetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverFailoverTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get"></a>

```csharp
private ConfigEntryServiceResolverFailoverTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverFailoverTargetsOutputReference <a name="ConfigEntryServiceResolverFailoverTargetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverFailoverTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer">ResetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPeer` <a name="ResetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer"></a>

```csharp
private void ResetPeer()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset"></a>

```csharp
private void ResetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput">PeerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer">Peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PeerInput`<sup>Optional</sup> <a name="PeerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput"></a>

```csharp
public string PeerInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput"></a>

```csharp
public string ServiceSubsetInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Peer`<sup>Required</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer"></a>

```csharp
public string Peer { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get"></a>

```csharp
private ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession">ResetSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetSession` <a name="ResetSession" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession"></a>

```csharp
private void ResetSession()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput">SessionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session">Session</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SessionInput`<sup>Optional</sup> <a name="SessionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput"></a>

```csharp
public object SessionInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Session`<sup>Required</sup> <a name="Session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session"></a>

```csharp
public object Session { get; }
```

- *Type:* object

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get"></a>

```csharp
private ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig">PutCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig">ResetCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue">ResetFieldValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal">ResetTerminal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCookieConfig` <a name="PutCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig"></a>

```csharp
private void PutCookieConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetCookieConfig` <a name="ResetCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig"></a>

```csharp
private void ResetCookieConfig()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetFieldValue` <a name="ResetFieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue"></a>

```csharp
private void ResetFieldValue()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp"></a>

```csharp
private void ResetSourceIp()
```

##### `ResetTerminal` <a name="ResetTerminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal"></a>

```csharp
private void ResetTerminal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig">CookieConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput">CookieConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput">FieldValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput">TerminalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue">FieldValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp">SourceIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal">Terminal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieConfig`<sup>Required</sup> <a name="CookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig"></a>

```csharp
public ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList CookieConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a>

---

##### `CookieConfigInput`<sup>Optional</sup> <a name="CookieConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput"></a>

```csharp
public object CookieConfigInput { get; }
```

- *Type:* object

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `FieldValueInput`<sup>Optional</sup> <a name="FieldValueInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput"></a>

```csharp
public string FieldValueInput { get; }
```

- *Type:* string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput"></a>

```csharp
public object SourceIpInput { get; }
```

- *Type:* object

---

##### `TerminalInput`<sup>Optional</sup> <a name="TerminalInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput"></a>

```csharp
public object TerminalInput { get; }
```

- *Type:* object

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `FieldValue`<sup>Required</sup> <a name="FieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue"></a>

```csharp
public string FieldValue { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp"></a>

```csharp
public object SourceIp { get; }
```

- *Type:* object

---

##### `Terminal`<sup>Required</sup> <a name="Terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal"></a>

```csharp
public object Terminal { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get"></a>

```csharp
private ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount">ResetChoiceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChoiceCount` <a name="ResetChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount"></a>

```csharp
private void ResetChoiceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput">ChoiceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount">ChoiceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChoiceCountInput`<sup>Optional</sup> <a name="ChoiceCountInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput"></a>

```csharp
public double ChoiceCountInput { get; }
```

- *Type:* double

---

##### `ChoiceCount`<sup>Required</sup> <a name="ChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount"></a>

```csharp
public double ChoiceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerList <a name="ConfigEntryServiceResolverLoadBalancerList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get"></a>

```csharp
private ConfigEntryServiceResolverLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerOutputReference <a name="ConfigEntryServiceResolverLoadBalancerOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies">PutHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig">PutLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig">PutRingHashConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies">ResetHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig">ResetLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig">ResetRingHashConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHashPolicies` <a name="PutHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies"></a>

```csharp
private void PutHashPolicies(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies.parameter.value"></a>

- *Type:* object

---

##### `PutLeastRequestConfig` <a name="PutLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig"></a>

```csharp
private void PutLeastRequestConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig.parameter.value"></a>

- *Type:* object

---

##### `PutRingHashConfig` <a name="PutRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig"></a>

```csharp
private void PutRingHashConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetHashPolicies` <a name="ResetHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies"></a>

```csharp
private void ResetHashPolicies()
```

##### `ResetLeastRequestConfig` <a name="ResetLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig"></a>

```csharp
private void ResetLeastRequestConfig()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetRingHashConfig` <a name="ResetRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig"></a>

```csharp
private void ResetRingHashConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies">HashPolicies</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig">LeastRequestConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig">RingHashConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput">HashPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput">LeastRequestConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput">RingHashConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HashPolicies`<sup>Required</sup> <a name="HashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies"></a>

```csharp
public ConfigEntryServiceResolverLoadBalancerHashPoliciesList HashPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a>

---

##### `LeastRequestConfig`<sup>Required</sup> <a name="LeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig"></a>

```csharp
public ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList LeastRequestConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a>

---

##### `RingHashConfig`<sup>Required</sup> <a name="RingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig"></a>

```csharp
public ConfigEntryServiceResolverLoadBalancerRingHashConfigList RingHashConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a>

---

##### `HashPoliciesInput`<sup>Optional</sup> <a name="HashPoliciesInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput"></a>

```csharp
public object HashPoliciesInput { get; }
```

- *Type:* object

---

##### `LeastRequestConfigInput`<sup>Optional</sup> <a name="LeastRequestConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput"></a>

```csharp
public object LeastRequestConfigInput { get; }
```

- *Type:* object

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RingHashConfigInput`<sup>Optional</sup> <a name="RingHashConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput"></a>

```csharp
public object RingHashConfigInput { get; }
```

- *Type:* object

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigList <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerRingHashConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get"></a>

```csharp
private ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize">ResetMaximumRingSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize">ResetMinimumRingSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumRingSize` <a name="ResetMaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize"></a>

```csharp
private void ResetMaximumRingSize()
```

##### `ResetMinimumRingSize` <a name="ResetMinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize"></a>

```csharp
private void ResetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput">MaximumRingSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput">MinimumRingSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize">MaximumRingSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize">MinimumRingSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumRingSizeInput`<sup>Optional</sup> <a name="MaximumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput"></a>

```csharp
public double MaximumRingSizeInput { get; }
```

- *Type:* double

---

##### `MinimumRingSizeInput`<sup>Optional</sup> <a name="MinimumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput"></a>

```csharp
public double MinimumRingSizeInput { get; }
```

- *Type:* double

---

##### `MaximumRingSize`<sup>Required</sup> <a name="MaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize"></a>

```csharp
public double MaximumRingSize { get; }
```

- *Type:* double

---

##### `MinimumRingSize`<sup>Required</sup> <a name="MinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize"></a>

```csharp
public double MinimumRingSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverRedirectList <a name="ConfigEntryServiceResolverRedirectList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverRedirectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get"></a>

```csharp
private ConfigEntryServiceResolverRedirectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverRedirectOutputReference <a name="ConfigEntryServiceResolverRedirectOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverRedirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer">ResetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup">ResetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset">ResetServiceSubset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPeer` <a name="ResetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer"></a>

```csharp
private void ResetPeer()
```

##### `ResetSamenessGroup` <a name="ResetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup"></a>

```csharp
private void ResetSamenessGroup()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetServiceSubset` <a name="ResetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset"></a>

```csharp
private void ResetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput">PeerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput">SamenessGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput">ServiceSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer">Peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup">SamenessGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset">ServiceSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PeerInput`<sup>Optional</sup> <a name="PeerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput"></a>

```csharp
public string PeerInput { get; }
```

- *Type:* string

---

##### `SamenessGroupInput`<sup>Optional</sup> <a name="SamenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput"></a>

```csharp
public string SamenessGroupInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServiceSubsetInput`<sup>Optional</sup> <a name="ServiceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput"></a>

```csharp
public string ServiceSubsetInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Peer`<sup>Required</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer"></a>

```csharp
public string Peer { get; }
```

- *Type:* string

---

##### `SamenessGroup`<sup>Required</sup> <a name="SamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup"></a>

```csharp
public string SamenessGroup { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceSubset`<sup>Required</sup> <a name="ServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset"></a>

```csharp
public string ServiceSubset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverSubsetsList <a name="ConfigEntryServiceResolverSubsetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverSubsetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get"></a>

```csharp
private ConfigEntryServiceResolverSubsetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceResolverSubsetsOutputReference <a name="ConfigEntryServiceResolverSubsetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceResolverSubsetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput">OnlyPassingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing">OnlyPassing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnlyPassingInput`<sup>Optional</sup> <a name="OnlyPassingInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput"></a>

```csharp
public object OnlyPassingInput { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnlyPassing`<sup>Required</sup> <a name="OnlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing"></a>

```csharp
public object OnlyPassing { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



