# `configEntryServiceDefaults` Submodule <a name="`configEntryServiceDefaults` Submodule" id="@cdktf/provider-consul.configEntryServiceDefaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceDefaults <a name="ConfigEntryServiceDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults consul_config_entry_service_defaults}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaults(Construct Scope, string Id, ConfigEntryServiceDefaultsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig">ConfigEntryServiceDefaultsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig">ConfigEntryServiceDefaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions">PutEnvoyExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose">PutExpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway">PutMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy">PutTransparentProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig">PutUpstreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetBalanceInboundConnections">ResetBalanceInboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetEnvoyExtensions">ResetEnvoyExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetExternalSni">ResetExternalSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalConnectTimeoutMs">ResetLocalConnectTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalRequestTimeoutMs">ResetLocalRequestTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMaxInboundConnections">ResetMaxInboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeshGateway">ResetMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMutualTlsMode">ResetMutualTlsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetTransparentProxy">ResetTransparentProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetUpstreamConfig">ResetUpstreamConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination"></a>

```csharp
private void PutDestination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination.parameter.value"></a>

- *Type:* object

---

##### `PutEnvoyExtensions` <a name="PutEnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions"></a>

```csharp
private void PutEnvoyExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions.parameter.value"></a>

- *Type:* object

---

##### `PutExpose` <a name="PutExpose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose"></a>

```csharp
private void PutExpose(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose.parameter.value"></a>

- *Type:* object

---

##### `PutMeshGateway` <a name="PutMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway"></a>

```csharp
private void PutMeshGateway(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway.parameter.value"></a>

- *Type:* object

---

##### `PutTransparentProxy` <a name="PutTransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy"></a>

```csharp
private void PutTransparentProxy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy.parameter.value"></a>

- *Type:* object

---

##### `PutUpstreamConfig` <a name="PutUpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig"></a>

```csharp
private void PutUpstreamConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetBalanceInboundConnections` <a name="ResetBalanceInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetBalanceInboundConnections"></a>

```csharp
private void ResetBalanceInboundConnections()
```

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetEnvoyExtensions` <a name="ResetEnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetEnvoyExtensions"></a>

```csharp
private void ResetEnvoyExtensions()
```

##### `ResetExternalSni` <a name="ResetExternalSni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetExternalSni"></a>

```csharp
private void ResetExternalSni()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalConnectTimeoutMs` <a name="ResetLocalConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalConnectTimeoutMs"></a>

```csharp
private void ResetLocalConnectTimeoutMs()
```

##### `ResetLocalRequestTimeoutMs` <a name="ResetLocalRequestTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalRequestTimeoutMs"></a>

```csharp
private void ResetLocalRequestTimeoutMs()
```

##### `ResetMaxInboundConnections` <a name="ResetMaxInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMaxInboundConnections"></a>

```csharp
private void ResetMaxInboundConnections()
```

##### `ResetMeshGateway` <a name="ResetMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeshGateway"></a>

```csharp
private void ResetMeshGateway()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeta"></a>

```csharp
private void ResetMeta()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetMutualTlsMode` <a name="ResetMutualTlsMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMutualTlsMode"></a>

```csharp
private void ResetMutualTlsMode()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetTransparentProxy` <a name="ResetTransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetTransparentProxy"></a>

```csharp
private void ResetTransparentProxy()
```

##### `ResetUpstreamConfig` <a name="ResetUpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetUpstreamConfig"></a>

```csharp
private void ResetUpstreamConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceDefaults resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceDefaults.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceDefaults.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceDefaults.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

ConfigEntryServiceDefaults.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ConfigEntryServiceDefaults resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceDefaults to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceDefaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceDefaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList">ConfigEntryServiceDefaultsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensions">EnvoyExtensions</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList">ConfigEntryServiceDefaultsEnvoyExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.expose">Expose</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList">ConfigEntryServiceDefaultsExposeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGateway">MeshGateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList">ConfigEntryServiceDefaultsMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxy">TransparentProxy</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList">ConfigEntryServiceDefaultsTransparentProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfig">UpstreamConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList">ConfigEntryServiceDefaultsUpstreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnectionsInput">BalanceInboundConnectionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destinationInput">DestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensionsInput">EnvoyExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.exposeInput">ExposeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSniInput">ExternalSniInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMsInput">LocalConnectTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMsInput">LocalRequestTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnectionsInput">MaxInboundConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGatewayInput">MeshGatewayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.metaInput">MetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsModeInput">MutualTlsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxyInput">TransparentProxyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfigInput">UpstreamConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnections">BalanceInboundConnections</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSni">ExternalSni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMs">LocalConnectTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMs">LocalRequestTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnections">MaxInboundConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsMode">MutualTlsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destination"></a>

```csharp
public ConfigEntryServiceDefaultsDestinationList Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList">ConfigEntryServiceDefaultsDestinationList</a>

---

##### `EnvoyExtensions`<sup>Required</sup> <a name="EnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensions"></a>

```csharp
public ConfigEntryServiceDefaultsEnvoyExtensionsList EnvoyExtensions { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList">ConfigEntryServiceDefaultsEnvoyExtensionsList</a>

---

##### `Expose`<sup>Required</sup> <a name="Expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.expose"></a>

```csharp
public ConfigEntryServiceDefaultsExposeList Expose { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList">ConfigEntryServiceDefaultsExposeList</a>

---

##### `MeshGateway`<sup>Required</sup> <a name="MeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGateway"></a>

```csharp
public ConfigEntryServiceDefaultsMeshGatewayList MeshGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList">ConfigEntryServiceDefaultsMeshGatewayList</a>

---

##### `TransparentProxy`<sup>Required</sup> <a name="TransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxy"></a>

```csharp
public ConfigEntryServiceDefaultsTransparentProxyList TransparentProxy { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList">ConfigEntryServiceDefaultsTransparentProxyList</a>

---

##### `UpstreamConfig`<sup>Required</sup> <a name="UpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfig"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigList UpstreamConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList">ConfigEntryServiceDefaultsUpstreamConfigList</a>

---

##### `BalanceInboundConnectionsInput`<sup>Optional</sup> <a name="BalanceInboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnectionsInput"></a>

```csharp
public string BalanceInboundConnectionsInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destinationInput"></a>

```csharp
public object DestinationInput { get; }
```

- *Type:* object

---

##### `EnvoyExtensionsInput`<sup>Optional</sup> <a name="EnvoyExtensionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensionsInput"></a>

```csharp
public object EnvoyExtensionsInput { get; }
```

- *Type:* object

---

##### `ExposeInput`<sup>Optional</sup> <a name="ExposeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.exposeInput"></a>

```csharp
public object ExposeInput { get; }
```

- *Type:* object

---

##### `ExternalSniInput`<sup>Optional</sup> <a name="ExternalSniInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSniInput"></a>

```csharp
public string ExternalSniInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalConnectTimeoutMsInput`<sup>Optional</sup> <a name="LocalConnectTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMsInput"></a>

```csharp
public double LocalConnectTimeoutMsInput { get; }
```

- *Type:* double

---

##### `LocalRequestTimeoutMsInput`<sup>Optional</sup> <a name="LocalRequestTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMsInput"></a>

```csharp
public double LocalRequestTimeoutMsInput { get; }
```

- *Type:* double

---

##### `MaxInboundConnectionsInput`<sup>Optional</sup> <a name="MaxInboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnectionsInput"></a>

```csharp
public double MaxInboundConnectionsInput { get; }
```

- *Type:* double

---

##### `MeshGatewayInput`<sup>Optional</sup> <a name="MeshGatewayInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGatewayInput"></a>

```csharp
public object MeshGatewayInput { get; }
```

- *Type:* object

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.metaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `MutualTlsModeInput`<sup>Optional</sup> <a name="MutualTlsModeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsModeInput"></a>

```csharp
public string MutualTlsModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TransparentProxyInput`<sup>Optional</sup> <a name="TransparentProxyInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxyInput"></a>

```csharp
public object TransparentProxyInput { get; }
```

- *Type:* object

---

##### `UpstreamConfigInput`<sup>Optional</sup> <a name="UpstreamConfigInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfigInput"></a>

```csharp
public object UpstreamConfigInput { get; }
```

- *Type:* object

---

##### `BalanceInboundConnections`<sup>Required</sup> <a name="BalanceInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnections"></a>

```csharp
public string BalanceInboundConnections { get; }
```

- *Type:* string

---

##### `ExternalSni`<sup>Required</sup> <a name="ExternalSni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSni"></a>

```csharp
public string ExternalSni { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalConnectTimeoutMs`<sup>Required</sup> <a name="LocalConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMs"></a>

```csharp
public double LocalConnectTimeoutMs { get; }
```

- *Type:* double

---

##### `LocalRequestTimeoutMs`<sup>Required</sup> <a name="LocalRequestTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMs"></a>

```csharp
public double LocalRequestTimeoutMs { get; }
```

- *Type:* double

---

##### `MaxInboundConnections`<sup>Required</sup> <a name="MaxInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnections"></a>

```csharp
public double MaxInboundConnections { get; }
```

- *Type:* double

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `MutualTlsMode`<sup>Required</sup> <a name="MutualTlsMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsMode"></a>

```csharp
public string MutualTlsMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceDefaultsConfig <a name="ConfigEntryServiceDefaultsConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Expose,
    string Name,
    string Protocol,
    string BalanceInboundConnections = null,
    object Destination = null,
    object EnvoyExtensions = null,
    string ExternalSni = null,
    string Id = null,
    double LocalConnectTimeoutMs = null,
    double LocalRequestTimeoutMs = null,
    double MaxInboundConnections = null,
    object MeshGateway = null,
    System.Collections.Generic.IDictionary<string, string> Meta = null,
    string Mode = null,
    string MutualTlsMode = null,
    string Namespace = null,
    string Partition = null,
    object TransparentProxy = null,
    object UpstreamConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.expose">Expose</a></code> | <code>object</code> | expose block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the service you are setting the defaults for. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.protocol">Protocol</a></code> | <code>string</code> | Specifies the default protocol for the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.balanceInboundConnections">BalanceInboundConnections</a></code> | <code>string</code> | Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.destination">Destination</a></code> | <code>object</code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.envoyExtensions">EnvoyExtensions</a></code> | <code>object</code> | envoy_extensions block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.externalSni">ExternalSni</a></code> | <code>string</code> | Specifies the TLS server name indication (SNI) when federating with an external system. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localConnectTimeoutMs">LocalConnectTimeoutMs</a></code> | <code>double</code> | Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localRequestTimeoutMs">LocalRequestTimeoutMs</a></code> | <code>double</code> | Specifies the timeout for HTTP requests to the local application instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.maxInboundConnections">MaxInboundConnections</a></code> | <code>double</code> | Specifies the maximum number of concurrent inbound connections to each service instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meshGateway">MeshGateway</a></code> | <code>object</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meta">Meta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Specifies a set of custom key-value pairs to add to the Consul KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mode">Mode</a></code> | <code>string</code> | Specifies a mode for how the service directs inbound and outbound traffic. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mutualTlsMode">MutualTlsMode</a></code> | <code>string</code> | Controls whether mutual TLS is required for incoming connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the Consul namespace that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.partition">Partition</a></code> | <code>string</code> | Specifies the name of the name of the Consul admin partition that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.transparentProxy">TransparentProxy</a></code> | <code>object</code> | transparent_proxy block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.upstreamConfig">UpstreamConfig</a></code> | <code>object</code> | upstream_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Expose`<sup>Required</sup> <a name="Expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.expose"></a>

```csharp
public object Expose { get; set; }
```

- *Type:* object

expose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#expose ConfigEntryServiceDefaults#expose}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the service you are setting the defaults for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

##### `BalanceInboundConnections`<sup>Optional</sup> <a name="BalanceInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.balanceInboundConnections"></a>

```csharp
public string BalanceInboundConnections { get; set; }
```

- *Type:* string

Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_inbound_connections ConfigEntryServiceDefaults#balance_inbound_connections}

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.destination"></a>

```csharp
public object Destination { get; set; }
```

- *Type:* object

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#destination ConfigEntryServiceDefaults#destination}

---

##### `EnvoyExtensions`<sup>Optional</sup> <a name="EnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.envoyExtensions"></a>

```csharp
public object EnvoyExtensions { get; set; }
```

- *Type:* object

envoy_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_extensions ConfigEntryServiceDefaults#envoy_extensions}

---

##### `ExternalSni`<sup>Optional</sup> <a name="ExternalSni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.externalSni"></a>

```csharp
public string ExternalSni { get; set; }
```

- *Type:* string

Specifies the TLS server name indication (SNI) when federating with an external system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#external_sni ConfigEntryServiceDefaults#external_sni}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalConnectTimeoutMs`<sup>Optional</sup> <a name="LocalConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localConnectTimeoutMs"></a>

```csharp
public double LocalConnectTimeoutMs { get; set; }
```

- *Type:* double

Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_connect_timeout_ms ConfigEntryServiceDefaults#local_connect_timeout_ms}

---

##### `LocalRequestTimeoutMs`<sup>Optional</sup> <a name="LocalRequestTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localRequestTimeoutMs"></a>

```csharp
public double LocalRequestTimeoutMs { get; set; }
```

- *Type:* double

Specifies the timeout for HTTP requests to the local application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_request_timeout_ms ConfigEntryServiceDefaults#local_request_timeout_ms}

---

##### `MaxInboundConnections`<sup>Optional</sup> <a name="MaxInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.maxInboundConnections"></a>

```csharp
public double MaxInboundConnections { get; set; }
```

- *Type:* double

Specifies the maximum number of concurrent inbound connections to each service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_inbound_connections ConfigEntryServiceDefaults#max_inbound_connections}

---

##### `MeshGateway`<sup>Optional</sup> <a name="MeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meshGateway"></a>

```csharp
public object MeshGateway { get; set; }
```

- *Type:* object

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Meta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Specifies a set of custom key-value pairs to add to the Consul KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#meta ConfigEntryServiceDefaults#meta}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specifies a mode for how the service directs inbound and outbound traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}

---

##### `MutualTlsMode`<sup>Optional</sup> <a name="MutualTlsMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mutualTlsMode"></a>

```csharp
public string MutualTlsMode { get; set; }
```

- *Type:* string

Controls whether mutual TLS is required for incoming connections to this service.

This setting is only supported for services with transparent proxy enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mutual_tls_mode ConfigEntryServiceDefaults#mutual_tls_mode}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the Consul namespace that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Specifies the name of the name of the Consul admin partition that the configuration entry applies to.

Refer to Admin Partitions for additional information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}

---

##### `TransparentProxy`<sup>Optional</sup> <a name="TransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.transparentProxy"></a>

```csharp
public object TransparentProxy { get; set; }
```

- *Type:* object

transparent_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#transparent_proxy ConfigEntryServiceDefaults#transparent_proxy}

---

##### `UpstreamConfig`<sup>Optional</sup> <a name="UpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.upstreamConfig"></a>

```csharp
public object UpstreamConfig { get; set; }
```

- *Type:* object

upstream_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#upstream_config ConfigEntryServiceDefaults#upstream_config}

---

### ConfigEntryServiceDefaultsDestination <a name="ConfigEntryServiceDefaultsDestination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsDestination {
    string[] Addresses,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.addresses">Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#addresses ConfigEntryServiceDefaults#addresses}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#port ConfigEntryServiceDefaults#port}. |

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.addresses"></a>

```csharp
public string[] Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#addresses ConfigEntryServiceDefaults#addresses}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#port ConfigEntryServiceDefaults#port}.

---

### ConfigEntryServiceDefaultsEnvoyExtensions <a name="ConfigEntryServiceDefaultsEnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsEnvoyExtensions {
    System.Collections.Generic.IDictionary<string, string> Arguments = null,
    string ConsulVersion = null,
    string EnvoyVersion = null,
    string Name = null,
    object Required = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.arguments">Arguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#arguments ConfigEntryServiceDefaults#arguments}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.consulVersion">ConsulVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#consul_version ConfigEntryServiceDefaults#consul_version}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.envoyVersion">EnvoyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_version ConfigEntryServiceDefaults#envoy_version}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.required">Required</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#required ConfigEntryServiceDefaults#required}. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.arguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Arguments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#arguments ConfigEntryServiceDefaults#arguments}.

---

##### `ConsulVersion`<sup>Optional</sup> <a name="ConsulVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.consulVersion"></a>

```csharp
public string ConsulVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#consul_version ConfigEntryServiceDefaults#consul_version}.

---

##### `EnvoyVersion`<sup>Optional</sup> <a name="EnvoyVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.envoyVersion"></a>

```csharp
public string EnvoyVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_version ConfigEntryServiceDefaults#envoy_version}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#required ConfigEntryServiceDefaults#required}.

---

### ConfigEntryServiceDefaultsExpose <a name="ConfigEntryServiceDefaultsExpose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsExpose {
    object Checks = null,
    object Paths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.checks">Checks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#checks ConfigEntryServiceDefaults#checks}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.paths">Paths</a></code> | <code>object</code> | paths block. |

---

##### `Checks`<sup>Optional</sup> <a name="Checks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.checks"></a>

```csharp
public object Checks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#checks ConfigEntryServiceDefaults#checks}.

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.paths"></a>

```csharp
public object Paths { get; set; }
```

- *Type:* object

paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#paths ConfigEntryServiceDefaults#paths}

---

### ConfigEntryServiceDefaultsExposePaths <a name="ConfigEntryServiceDefaultsExposePaths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsExposePaths {
    double ListenerPort = null,
    double LocalPathPort = null,
    string Path = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.listenerPort">ListenerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#listener_port ConfigEntryServiceDefaults#listener_port}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.localPathPort">LocalPathPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_path_port ConfigEntryServiceDefaults#local_path_port}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#path ConfigEntryServiceDefaults#path}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}. |

---

##### `ListenerPort`<sup>Optional</sup> <a name="ListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#listener_port ConfigEntryServiceDefaults#listener_port}.

---

##### `LocalPathPort`<sup>Optional</sup> <a name="LocalPathPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.localPathPort"></a>

```csharp
public double LocalPathPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_path_port ConfigEntryServiceDefaults#local_path_port}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#path ConfigEntryServiceDefaults#path}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}.

---

### ConfigEntryServiceDefaultsMeshGateway <a name="ConfigEntryServiceDefaultsMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsMeshGateway {
    string Mode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsTransparentProxy <a name="ConfigEntryServiceDefaultsTransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsTransparentProxy {
    object DialedDirectly,
    double OutboundListenerPort
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.dialedDirectly">DialedDirectly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#dialed_directly ConfigEntryServiceDefaults#dialed_directly}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.outboundListenerPort">OutboundListenerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#outbound_listener_port ConfigEntryServiceDefaults#outbound_listener_port}. |

---

##### `DialedDirectly`<sup>Required</sup> <a name="DialedDirectly" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.dialedDirectly"></a>

```csharp
public object DialedDirectly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#dialed_directly ConfigEntryServiceDefaults#dialed_directly}.

---

##### `OutboundListenerPort`<sup>Required</sup> <a name="OutboundListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.outboundListenerPort"></a>

```csharp
public double OutboundListenerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#outbound_listener_port ConfigEntryServiceDefaults#outbound_listener_port}.

---

### ConfigEntryServiceDefaultsUpstreamConfig <a name="ConfigEntryServiceDefaultsUpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfig {
    object Defaults = null,
    object Overrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.defaults">Defaults</a></code> | <code>object</code> | defaults block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.overrides">Overrides</a></code> | <code>object</code> | overrides block. |

---

##### `Defaults`<sup>Optional</sup> <a name="Defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.defaults"></a>

```csharp
public object Defaults { get; set; }
```

- *Type:* object

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#defaults ConfigEntryServiceDefaults#defaults}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.overrides"></a>

```csharp
public object Overrides { get; set; }
```

- *Type:* object

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#overrides ConfigEntryServiceDefaults#overrides}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaults <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaults {
    string BalanceOutboundConnections = null,
    double ConnectTimeoutMs = null,
    object Limits = null,
    object MeshGateway = null,
    object PassiveHealthCheck = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.balanceOutboundConnections">BalanceOutboundConnections</a></code> | <code>string</code> | Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.connectTimeoutMs">ConnectTimeoutMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.limits">Limits</a></code> | <code>object</code> | limits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.meshGateway">MeshGateway</a></code> | <code>object</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.passiveHealthCheck">PassiveHealthCheck</a></code> | <code>object</code> | passive_health_check block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.protocol">Protocol</a></code> | <code>string</code> | Specifies the default protocol for the service. |

---

##### `BalanceOutboundConnections`<sup>Optional</sup> <a name="BalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.balanceOutboundConnections"></a>

```csharp
public string BalanceOutboundConnections { get; set; }
```

- *Type:* string

Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}

---

##### `ConnectTimeoutMs`<sup>Optional</sup> <a name="ConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.connectTimeoutMs"></a>

```csharp
public double ConnectTimeoutMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}.

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.limits"></a>

```csharp
public object Limits { get; set; }
```

- *Type:* object

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}

---

##### `MeshGateway`<sup>Optional</sup> <a name="MeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.meshGateway"></a>

```csharp
public object MeshGateway { get; set; }
```

- *Type:* object

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `PassiveHealthCheck`<sup>Optional</sup> <a name="PassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.passiveHealthCheck"></a>

```csharp
public object PassiveHealthCheck { get; set; }
```

- *Type:* object

passive_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits {
    double MaxConcurrentRequests = null,
    double MaxConnections = null,
    double MaxPendingRequests = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | Specifies the maximum number of concurrent requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConnections">MaxConnections</a></code> | <code>double</code> | Specifies the maximum number of connections a service instance can establish against the upstream. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | Specifies the maximum number of requests that are queued while waiting for a connection to establish. |

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; set; }
```

- *Type:* double

Specifies the maximum number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConnections"></a>

```csharp
public double MaxConnections { get; set; }
```

- *Type:* double

Specifies the maximum number of connections a service instance can establish against the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}

---

##### `MaxPendingRequests`<sup>Optional</sup> <a name="MaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; set; }
```

- *Type:* double

Specifies the maximum number of requests that are queued while waiting for a connection to establish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck {
    string BaseEjectionTime = null,
    double EnforcingConsecutive5Xx = null,
    string Interval = null,
    double MaxEjectionPercent = null,
    double MaxFailures = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.baseEjectionTime">BaseEjectionTime</a></code> | <code>string</code> | Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.enforcingConsecutive5Xx">EnforcingConsecutive5Xx</a></code> | <code>double</code> | Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.interval">Interval</a></code> | <code>string</code> | Specifies the time between checks. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>double</code> | Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxFailures">MaxFailures</a></code> | <code>double</code> | Specifies the number of consecutive failures allowed per check interval. |

---

##### `BaseEjectionTime`<sup>Optional</sup> <a name="BaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.baseEjectionTime"></a>

```csharp
public string BaseEjectionTime { get; set; }
```

- *Type:* string

Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}

---

##### `EnforcingConsecutive5Xx`<sup>Optional</sup> <a name="EnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.enforcingConsecutive5Xx"></a>

```csharp
public double EnforcingConsecutive5Xx { get; set; }
```

- *Type:* double

Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Specifies the time between checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}

---

##### `MaxEjectionPercent`<sup>Optional</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxEjectionPercent"></a>

```csharp
public double MaxEjectionPercent { get; set; }
```

- *Type:* double

Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}

---

##### `MaxFailures`<sup>Optional</sup> <a name="MaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxFailures"></a>

```csharp
public double MaxFailures { get; set; }
```

- *Type:* double

Specifies the number of consecutive failures allowed per check interval.

If exceeded, Consul removes the host from the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverrides <a name="ConfigEntryServiceDefaultsUpstreamConfigOverrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverrides {
    string BalanceOutboundConnections = null,
    double ConnectTimeoutMs = null,
    string EnvoyListenerJson = null,
    object Limits = null,
    object MeshGateway = null,
    string Name = null,
    string Namespace = null,
    string Partition = null,
    object PassiveHealthCheck = null,
    string Peer = null,
    string Protocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.balanceOutboundConnections">BalanceOutboundConnections</a></code> | <code>string</code> | Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.connectTimeoutMs">ConnectTimeoutMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.envoyListenerJson">EnvoyListenerJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_listener_json ConfigEntryServiceDefaults#envoy_listener_json}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.limits">Limits</a></code> | <code>object</code> | limits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.meshGateway">MeshGateway</a></code> | <code>object</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.name">Name</a></code> | <code>string</code> | Specifies the name of the service you are setting the defaults for. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.namespace">Namespace</a></code> | <code>string</code> | Specifies the namespace containing the upstream service that the configuration applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.partition">Partition</a></code> | <code>string</code> | Specifies the name of the name of the Consul admin partition that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.passiveHealthCheck">PassiveHealthCheck</a></code> | <code>object</code> | passive_health_check block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.peer">Peer</a></code> | <code>string</code> | Specifies the peer name of the upstream service that the configuration applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.protocol">Protocol</a></code> | <code>string</code> | Specifies the default protocol for the service. |

---

##### `BalanceOutboundConnections`<sup>Optional</sup> <a name="BalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.balanceOutboundConnections"></a>

```csharp
public string BalanceOutboundConnections { get; set; }
```

- *Type:* string

Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}

---

##### `ConnectTimeoutMs`<sup>Optional</sup> <a name="ConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.connectTimeoutMs"></a>

```csharp
public double ConnectTimeoutMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}.

---

##### `EnvoyListenerJson`<sup>Optional</sup> <a name="EnvoyListenerJson" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.envoyListenerJson"></a>

```csharp
public string EnvoyListenerJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_listener_json ConfigEntryServiceDefaults#envoy_listener_json}.

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.limits"></a>

```csharp
public object Limits { get; set; }
```

- *Type:* object

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}

---

##### `MeshGateway`<sup>Optional</sup> <a name="MeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.meshGateway"></a>

```csharp
public object MeshGateway { get; set; }
```

- *Type:* object

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the service you are setting the defaults for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Specifies the namespace containing the upstream service that the configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Specifies the name of the name of the Consul admin partition that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}

---

##### `PassiveHealthCheck`<sup>Optional</sup> <a name="PassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.passiveHealthCheck"></a>

```csharp
public object PassiveHealthCheck { get; set; }
```

- *Type:* object

passive_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}

---

##### `Peer`<sup>Optional</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.peer"></a>

```csharp
public string Peer { get; set; }
```

- *Type:* string

Specifies the peer name of the upstream service that the configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#peer ConfigEntryServiceDefaults#peer}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits {
    double MaxConcurrentRequests = null,
    double MaxConnections = null,
    double MaxPendingRequests = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | Specifies the maximum number of concurrent requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConnections">MaxConnections</a></code> | <code>double</code> | Specifies the maximum number of connections a service instance can establish against the upstream. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | Specifies the maximum number of requests that are queued while waiting for a connection to establish. |

---

##### `MaxConcurrentRequests`<sup>Optional</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; set; }
```

- *Type:* double

Specifies the maximum number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}

---

##### `MaxConnections`<sup>Optional</sup> <a name="MaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConnections"></a>

```csharp
public double MaxConnections { get; set; }
```

- *Type:* double

Specifies the maximum number of connections a service instance can establish against the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}

---

##### `MaxPendingRequests`<sup>Optional</sup> <a name="MaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; set; }
```

- *Type:* double

Specifies the maximum number of requests that are queued while waiting for a connection to establish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck {
    string BaseEjectionTime = null,
    double EnforcingConsecutive5Xx = null,
    string Interval = null,
    double MaxEjectionPercent = null,
    double MaxFailures = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.baseEjectionTime">BaseEjectionTime</a></code> | <code>string</code> | Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.enforcingConsecutive5Xx">EnforcingConsecutive5Xx</a></code> | <code>double</code> | Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.interval">Interval</a></code> | <code>string</code> | Specifies the time between checks. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>double</code> | Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxFailures">MaxFailures</a></code> | <code>double</code> | Specifies the number of consecutive failures allowed per check interval. |

---

##### `BaseEjectionTime`<sup>Optional</sup> <a name="BaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.baseEjectionTime"></a>

```csharp
public string BaseEjectionTime { get; set; }
```

- *Type:* string

Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}

---

##### `EnforcingConsecutive5Xx`<sup>Optional</sup> <a name="EnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.enforcingConsecutive5Xx"></a>

```csharp
public double EnforcingConsecutive5Xx { get; set; }
```

- *Type:* double

Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Specifies the time between checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}

---

##### `MaxEjectionPercent`<sup>Optional</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxEjectionPercent"></a>

```csharp
public double MaxEjectionPercent { get; set; }
```

- *Type:* double

Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}

---

##### `MaxFailures`<sup>Optional</sup> <a name="MaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxFailures"></a>

```csharp
public double MaxFailures { get; set; }
```

- *Type:* double

Specifies the number of consecutive failures allowed per check interval.

If exceeded, Consul removes the host from the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceDefaultsDestinationList <a name="ConfigEntryServiceDefaultsDestinationList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get"></a>

```csharp
private ConfigEntryServiceDefaultsDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsDestinationOutputReference <a name="ConfigEntryServiceDefaultsDestinationOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addressesInput">AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addressesInput"></a>

```csharp
public string[] AddressesInput { get; }
```

- *Type:* string[]

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsEnvoyExtensionsList <a name="ConfigEntryServiceDefaultsEnvoyExtensionsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsEnvoyExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get"></a>

```csharp
private ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference <a name="ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetConsulVersion">ResetConsulVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetEnvoyVersion">ResetEnvoyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetConsulVersion` <a name="ResetConsulVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetConsulVersion"></a>

```csharp
private void ResetConsulVersion()
```

##### `ResetEnvoyVersion` <a name="ResetEnvoyVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetEnvoyVersion"></a>

```csharp
private void ResetEnvoyVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersionInput">ConsulVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersionInput">EnvoyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.arguments">Arguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersion">ConsulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersion">EnvoyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.argumentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ArgumentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConsulVersionInput`<sup>Optional</sup> <a name="ConsulVersionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersionInput"></a>

```csharp
public string ConsulVersionInput { get; }
```

- *Type:* string

---

##### `EnvoyVersionInput`<sup>Optional</sup> <a name="EnvoyVersionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersionInput"></a>

```csharp
public string EnvoyVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.arguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Arguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConsulVersion`<sup>Required</sup> <a name="ConsulVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersion"></a>

```csharp
public string ConsulVersion { get; }
```

- *Type:* string

---

##### `EnvoyVersion`<sup>Required</sup> <a name="EnvoyVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersion"></a>

```csharp
public string EnvoyVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsExposeList <a name="ConfigEntryServiceDefaultsExposeList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsExposeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get"></a>

```csharp
private ConfigEntryServiceDefaultsExposeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsExposeOutputReference <a name="ConfigEntryServiceDefaultsExposeOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsExposeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths">PutPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetChecks">ResetChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPaths` <a name="PutPaths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths"></a>

```csharp
private void PutPaths(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths.parameter.value"></a>

- *Type:* object

---

##### `ResetChecks` <a name="ResetChecks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetChecks"></a>

```csharp
private void ResetChecks()
```

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.paths">Paths</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList">ConfigEntryServiceDefaultsExposePathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checksInput">ChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.pathsInput">PathsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checks">Checks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.paths"></a>

```csharp
public ConfigEntryServiceDefaultsExposePathsList Paths { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList">ConfigEntryServiceDefaultsExposePathsList</a>

---

##### `ChecksInput`<sup>Optional</sup> <a name="ChecksInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checksInput"></a>

```csharp
public object ChecksInput { get; }
```

- *Type:* object

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.pathsInput"></a>

```csharp
public object PathsInput { get; }
```

- *Type:* object

---

##### `Checks`<sup>Required</sup> <a name="Checks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checks"></a>

```csharp
public object Checks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsExposePathsList <a name="ConfigEntryServiceDefaultsExposePathsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsExposePathsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get"></a>

```csharp
private ConfigEntryServiceDefaultsExposePathsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsExposePathsOutputReference <a name="ConfigEntryServiceDefaultsExposePathsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsExposePathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetListenerPort">ResetListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetLocalPathPort">ResetLocalPathPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetListenerPort` <a name="ResetListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetListenerPort"></a>

```csharp
private void ResetListenerPort()
```

##### `ResetLocalPathPort` <a name="ResetLocalPathPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetLocalPathPort"></a>

```csharp
private void ResetLocalPathPort()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPortInput">LocalPathPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPort">LocalPathPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `LocalPathPortInput`<sup>Optional</sup> <a name="LocalPathPortInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPortInput"></a>

```csharp
public double LocalPathPortInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `LocalPathPort`<sup>Required</sup> <a name="LocalPathPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPort"></a>

```csharp
public double LocalPathPort { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsMeshGatewayList <a name="ConfigEntryServiceDefaultsMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsMeshGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get"></a>

```csharp
private ConfigEntryServiceDefaultsMeshGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsMeshGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsTransparentProxyList <a name="ConfigEntryServiceDefaultsTransparentProxyList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsTransparentProxyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get"></a>

```csharp
private ConfigEntryServiceDefaultsTransparentProxyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsTransparentProxyOutputReference <a name="ConfigEntryServiceDefaultsTransparentProxyOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsTransparentProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectlyInput">DialedDirectlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPortInput">OutboundListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectly">DialedDirectly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPort">OutboundListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DialedDirectlyInput`<sup>Optional</sup> <a name="DialedDirectlyInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectlyInput"></a>

```csharp
public object DialedDirectlyInput { get; }
```

- *Type:* object

---

##### `OutboundListenerPortInput`<sup>Optional</sup> <a name="OutboundListenerPortInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPortInput"></a>

```csharp
public double OutboundListenerPortInput { get; }
```

- *Type:* double

---

##### `DialedDirectly`<sup>Required</sup> <a name="DialedDirectly" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectly"></a>

```csharp
public object DialedDirectly { get; }
```

- *Type:* object

---

##### `OutboundListenerPort`<sup>Required</sup> <a name="OutboundListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPort"></a>

```csharp
public double OutboundListenerPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxPendingRequests">ResetMaxPendingRequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConcurrentRequests"></a>

```csharp
private void ResetMaxConcurrentRequests()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConnections"></a>

```csharp
private void ResetMaxConnections()
```

##### `ResetMaxPendingRequests` <a name="ResetMaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxPendingRequests"></a>

```csharp
private void ResetMaxPendingRequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequestsInput">MaxPendingRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequestsInput"></a>

```csharp
public double MaxConcurrentRequestsInput { get; }
```

- *Type:* double

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnectionsInput"></a>

```csharp
public double MaxConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxPendingRequestsInput`<sup>Optional</sup> <a name="MaxPendingRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequestsInput"></a>

```csharp
public double MaxPendingRequestsInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; }
```

- *Type:* double

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway">PutMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck">PutPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetBalanceOutboundConnections">ResetBalanceOutboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetConnectTimeoutMs">ResetConnectTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetMeshGateway">ResetMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetPassiveHealthCheck">ResetPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits"></a>

```csharp
private void PutLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits.parameter.value"></a>

- *Type:* object

---

##### `PutMeshGateway` <a name="PutMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway"></a>

```csharp
private void PutMeshGateway(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway.parameter.value"></a>

- *Type:* object

---

##### `PutPassiveHealthCheck` <a name="PutPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck"></a>

```csharp
private void PutPassiveHealthCheck(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck.parameter.value"></a>

- *Type:* object

---

##### `ResetBalanceOutboundConnections` <a name="ResetBalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetBalanceOutboundConnections"></a>

```csharp
private void ResetBalanceOutboundConnections()
```

##### `ResetConnectTimeoutMs` <a name="ResetConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetConnectTimeoutMs"></a>

```csharp
private void ResetConnectTimeoutMs()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetMeshGateway` <a name="ResetMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetMeshGateway"></a>

```csharp
private void ResetMeshGateway()
```

##### `ResetPassiveHealthCheck` <a name="ResetPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetPassiveHealthCheck"></a>

```csharp
private void ResetPassiveHealthCheck()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGateway">MeshGateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheck">PassiveHealthCheck</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnectionsInput">BalanceOutboundConnectionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMsInput">ConnectTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limitsInput">LimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGatewayInput">MeshGatewayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheckInput">PassiveHealthCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnections">BalanceOutboundConnections</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMs">ConnectTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limits"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList</a>

---

##### `MeshGateway`<sup>Required</sup> <a name="MeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGateway"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList MeshGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList</a>

---

##### `PassiveHealthCheck`<sup>Required</sup> <a name="PassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheck"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList PassiveHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList</a>

---

##### `BalanceOutboundConnectionsInput`<sup>Optional</sup> <a name="BalanceOutboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnectionsInput"></a>

```csharp
public string BalanceOutboundConnectionsInput { get; }
```

- *Type:* string

---

##### `ConnectTimeoutMsInput`<sup>Optional</sup> <a name="ConnectTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMsInput"></a>

```csharp
public double ConnectTimeoutMsInput { get; }
```

- *Type:* double

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limitsInput"></a>

```csharp
public object LimitsInput { get; }
```

- *Type:* object

---

##### `MeshGatewayInput`<sup>Optional</sup> <a name="MeshGatewayInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGatewayInput"></a>

```csharp
public object MeshGatewayInput { get; }
```

- *Type:* object

---

##### `PassiveHealthCheckInput`<sup>Optional</sup> <a name="PassiveHealthCheckInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheckInput"></a>

```csharp
public object PassiveHealthCheckInput { get; }
```

- *Type:* object

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `BalanceOutboundConnections`<sup>Required</sup> <a name="BalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnections"></a>

```csharp
public string BalanceOutboundConnections { get; }
```

- *Type:* string

---

##### `ConnectTimeoutMs`<sup>Required</sup> <a name="ConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMs"></a>

```csharp
public double ConnectTimeoutMs { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetBaseEjectionTime">ResetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx">ResetEnforcingConsecutive5Xx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxEjectionPercent">ResetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxFailures">ResetMaxFailures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseEjectionTime` <a name="ResetBaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetBaseEjectionTime"></a>

```csharp
private void ResetBaseEjectionTime()
```

##### `ResetEnforcingConsecutive5Xx` <a name="ResetEnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx"></a>

```csharp
private void ResetEnforcingConsecutive5Xx()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMaxEjectionPercent` <a name="ResetMaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxEjectionPercent"></a>

```csharp
private void ResetMaxEjectionPercent()
```

##### `ResetMaxFailures` <a name="ResetMaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxFailures"></a>

```csharp
private void ResetMaxFailures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTimeInput">BaseEjectionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput">EnforcingConsecutive5XxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercentInput">MaxEjectionPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailuresInput">MaxFailuresInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx">EnforcingConsecutive5Xx</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailures">MaxFailures</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseEjectionTimeInput`<sup>Optional</sup> <a name="BaseEjectionTimeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTimeInput"></a>

```csharp
public string BaseEjectionTimeInput { get; }
```

- *Type:* string

---

##### `EnforcingConsecutive5XxInput`<sup>Optional</sup> <a name="EnforcingConsecutive5XxInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput"></a>

```csharp
public double EnforcingConsecutive5XxInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `MaxEjectionPercentInput`<sup>Optional</sup> <a name="MaxEjectionPercentInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercentInput"></a>

```csharp
public double MaxEjectionPercentInput { get; }
```

- *Type:* double

---

##### `MaxFailuresInput`<sup>Optional</sup> <a name="MaxFailuresInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailuresInput"></a>

```csharp
public double MaxFailuresInput { get; }
```

- *Type:* double

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTime"></a>

```csharp
public string BaseEjectionTime { get; }
```

- *Type:* string

---

##### `EnforcingConsecutive5Xx`<sup>Required</sup> <a name="EnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx"></a>

```csharp
public double EnforcingConsecutive5Xx { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercent"></a>

```csharp
public double MaxEjectionPercent { get; }
```

- *Type:* double

---

##### `MaxFailures`<sup>Required</sup> <a name="MaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailures"></a>

```csharp
public double MaxFailures { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigList <a name="ConfigEntryServiceDefaultsUpstreamConfigList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults">PutDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetDefaults">ResetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaults` <a name="PutDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults"></a>

```csharp
private void PutDefaults(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults.parameter.value"></a>

- *Type:* object

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides"></a>

```csharp
private void PutOverrides(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaults` <a name="ResetDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetDefaults"></a>

```csharp
private void ResetDefaults()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetOverrides"></a>

```csharp
private void ResetOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList">ConfigEntryServiceDefaultsUpstreamConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaultsInput">DefaultsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overridesInput">OverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Defaults`<sup>Required</sup> <a name="Defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaults"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigDefaultsList Defaults { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsList</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overrides"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigOverridesList Overrides { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList">ConfigEntryServiceDefaultsUpstreamConfigOverridesList</a>

---

##### `DefaultsInput`<sup>Optional</sup> <a name="DefaultsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaultsInput"></a>

```csharp
public object DefaultsInput { get; }
```

- *Type:* object

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overridesInput"></a>

```csharp
public object OverridesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConcurrentRequests">ResetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConnections">ResetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxPendingRequests">ResetMaxPendingRequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentRequests` <a name="ResetMaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConcurrentRequests"></a>

```csharp
private void ResetMaxConcurrentRequests()
```

##### `ResetMaxConnections` <a name="ResetMaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConnections"></a>

```csharp
private void ResetMaxConnections()
```

##### `ResetMaxPendingRequests` <a name="ResetMaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxPendingRequests"></a>

```csharp
private void ResetMaxPendingRequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequestsInput">MaxConcurrentRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnectionsInput">MaxConnectionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequestsInput">MaxPendingRequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequests">MaxConcurrentRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequests">MaxPendingRequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentRequestsInput`<sup>Optional</sup> <a name="MaxConcurrentRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequestsInput"></a>

```csharp
public double MaxConcurrentRequestsInput { get; }
```

- *Type:* double

---

##### `MaxConnectionsInput`<sup>Optional</sup> <a name="MaxConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnectionsInput"></a>

```csharp
public double MaxConnectionsInput { get; }
```

- *Type:* double

---

##### `MaxPendingRequestsInput`<sup>Optional</sup> <a name="MaxPendingRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequestsInput"></a>

```csharp
public double MaxPendingRequestsInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentRequests`<sup>Required</sup> <a name="MaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequests"></a>

```csharp
public double MaxConcurrentRequests { get; }
```

- *Type:* double

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `MaxPendingRequests`<sup>Required</sup> <a name="MaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequests"></a>

```csharp
public double MaxPendingRequests { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway">PutMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck">PutPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetBalanceOutboundConnections">ResetBalanceOutboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetConnectTimeoutMs">ResetConnectTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetEnvoyListenerJson">ResetEnvoyListenerJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetMeshGateway">ResetMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPassiveHealthCheck">ResetPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPeer">ResetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits"></a>

```csharp
private void PutLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits.parameter.value"></a>

- *Type:* object

---

##### `PutMeshGateway` <a name="PutMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway"></a>

```csharp
private void PutMeshGateway(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway.parameter.value"></a>

- *Type:* object

---

##### `PutPassiveHealthCheck` <a name="PutPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck"></a>

```csharp
private void PutPassiveHealthCheck(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck.parameter.value"></a>

- *Type:* object

---

##### `ResetBalanceOutboundConnections` <a name="ResetBalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetBalanceOutboundConnections"></a>

```csharp
private void ResetBalanceOutboundConnections()
```

##### `ResetConnectTimeoutMs` <a name="ResetConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetConnectTimeoutMs"></a>

```csharp
private void ResetConnectTimeoutMs()
```

##### `ResetEnvoyListenerJson` <a name="ResetEnvoyListenerJson" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetEnvoyListenerJson"></a>

```csharp
private void ResetEnvoyListenerJson()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetMeshGateway` <a name="ResetMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetMeshGateway"></a>

```csharp
private void ResetMeshGateway()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPassiveHealthCheck` <a name="ResetPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPassiveHealthCheck"></a>

```csharp
private void ResetPassiveHealthCheck()
```

##### `ResetPeer` <a name="ResetPeer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPeer"></a>

```csharp
private void ResetPeer()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGateway">MeshGateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheck">PassiveHealthCheck</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnectionsInput">BalanceOutboundConnectionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMsInput">ConnectTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJsonInput">EnvoyListenerJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGatewayInput">MeshGatewayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheckInput">PassiveHealthCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peerInput">PeerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnections">BalanceOutboundConnections</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMs">ConnectTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJson">EnvoyListenerJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peer">Peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limits"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList</a>

---

##### `MeshGateway`<sup>Required</sup> <a name="MeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGateway"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList MeshGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList</a>

---

##### `PassiveHealthCheck`<sup>Required</sup> <a name="PassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheck"></a>

```csharp
public ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList PassiveHealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList</a>

---

##### `BalanceOutboundConnectionsInput`<sup>Optional</sup> <a name="BalanceOutboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnectionsInput"></a>

```csharp
public string BalanceOutboundConnectionsInput { get; }
```

- *Type:* string

---

##### `ConnectTimeoutMsInput`<sup>Optional</sup> <a name="ConnectTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMsInput"></a>

```csharp
public double ConnectTimeoutMsInput { get; }
```

- *Type:* double

---

##### `EnvoyListenerJsonInput`<sup>Optional</sup> <a name="EnvoyListenerJsonInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJsonInput"></a>

```csharp
public string EnvoyListenerJsonInput { get; }
```

- *Type:* string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limitsInput"></a>

```csharp
public object LimitsInput { get; }
```

- *Type:* object

---

##### `MeshGatewayInput`<sup>Optional</sup> <a name="MeshGatewayInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGatewayInput"></a>

```csharp
public object MeshGatewayInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PassiveHealthCheckInput`<sup>Optional</sup> <a name="PassiveHealthCheckInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheckInput"></a>

```csharp
public object PassiveHealthCheckInput { get; }
```

- *Type:* object

---

##### `PeerInput`<sup>Optional</sup> <a name="PeerInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peerInput"></a>

```csharp
public string PeerInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `BalanceOutboundConnections`<sup>Required</sup> <a name="BalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnections"></a>

```csharp
public string BalanceOutboundConnections { get; }
```

- *Type:* string

---

##### `ConnectTimeoutMs`<sup>Required</sup> <a name="ConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMs"></a>

```csharp
public double ConnectTimeoutMs { get; }
```

- *Type:* double

---

##### `EnvoyListenerJson`<sup>Required</sup> <a name="EnvoyListenerJson" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJson"></a>

```csharp
public string EnvoyListenerJson { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Peer`<sup>Required</sup> <a name="Peer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peer"></a>

```csharp
public string Peer { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get"></a>

```csharp
private ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetBaseEjectionTime">ResetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx">ResetEnforcingConsecutive5Xx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxEjectionPercent">ResetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxFailures">ResetMaxFailures</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseEjectionTime` <a name="ResetBaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetBaseEjectionTime"></a>

```csharp
private void ResetBaseEjectionTime()
```

##### `ResetEnforcingConsecutive5Xx` <a name="ResetEnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx"></a>

```csharp
private void ResetEnforcingConsecutive5Xx()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetMaxEjectionPercent` <a name="ResetMaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxEjectionPercent"></a>

```csharp
private void ResetMaxEjectionPercent()
```

##### `ResetMaxFailures` <a name="ResetMaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxFailures"></a>

```csharp
private void ResetMaxFailures()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTimeInput">BaseEjectionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput">EnforcingConsecutive5XxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercentInput">MaxEjectionPercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailuresInput">MaxFailuresInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTime">BaseEjectionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx">EnforcingConsecutive5Xx</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercent">MaxEjectionPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailures">MaxFailures</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseEjectionTimeInput`<sup>Optional</sup> <a name="BaseEjectionTimeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTimeInput"></a>

```csharp
public string BaseEjectionTimeInput { get; }
```

- *Type:* string

---

##### `EnforcingConsecutive5XxInput`<sup>Optional</sup> <a name="EnforcingConsecutive5XxInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput"></a>

```csharp
public double EnforcingConsecutive5XxInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `MaxEjectionPercentInput`<sup>Optional</sup> <a name="MaxEjectionPercentInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercentInput"></a>

```csharp
public double MaxEjectionPercentInput { get; }
```

- *Type:* double

---

##### `MaxFailuresInput`<sup>Optional</sup> <a name="MaxFailuresInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailuresInput"></a>

```csharp
public double MaxFailuresInput { get; }
```

- *Type:* double

---

##### `BaseEjectionTime`<sup>Required</sup> <a name="BaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTime"></a>

```csharp
public string BaseEjectionTime { get; }
```

- *Type:* string

---

##### `EnforcingConsecutive5Xx`<sup>Required</sup> <a name="EnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx"></a>

```csharp
public double EnforcingConsecutive5Xx { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `MaxEjectionPercent`<sup>Required</sup> <a name="MaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercent"></a>

```csharp
public double MaxEjectionPercent { get; }
```

- *Type:* double

---

##### `MaxFailures`<sup>Required</sup> <a name="MaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailures"></a>

```csharp
public double MaxFailures { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



