# `dataConsulConfigEntryV2ExportedServices` Submodule <a name="`dataConsulConfigEntryV2ExportedServices` Submodule" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulConfigEntryV2ExportedServices <a name="DataConsulConfigEntryV2ExportedServices" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services consul_config_entry_v2_exported_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulConfigEntryV2ExportedServices(Construct Scope, string Id, DataConsulConfigEntryV2ExportedServicesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig">DataConsulConfigEntryV2ExportedServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig">DataConsulConfigEntryV2ExportedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers">ResetPartitionConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers">ResetPeerConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers">ResetSamenessGroupConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPartitionConsumers` <a name="ResetPartitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers"></a>

```csharp
private void ResetPartitionConsumers()
```

##### `ResetPeerConsumers` <a name="ResetPeerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers"></a>

```csharp
private void ResetPeerConsumers()
```

##### `ResetSamenessGroupConsumers` <a name="ResetSamenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers"></a>

```csharp
private void ResetSamenessGroupConsumers()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices"></a>

```csharp
private void ResetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulConfigEntryV2ExportedServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulConfigEntryV2ExportedServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulConfigEntryV2ExportedServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulConfigEntryV2ExportedServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulConfigEntryV2ExportedServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulConfigEntryV2ExportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulConfigEntryV2ExportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput">PartitionConsumersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput">PeerConsumersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput">SamenessGroupConsumersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput">ServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers">PartitionConsumers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers">PeerConsumers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers">SamenessGroupConsumers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services">Services</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionConsumersInput`<sup>Optional</sup> <a name="PartitionConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput"></a>

```csharp
public string[] PartitionConsumersInput { get; }
```

- *Type:* string[]

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PeerConsumersInput`<sup>Optional</sup> <a name="PeerConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput"></a>

```csharp
public string[] PeerConsumersInput { get; }
```

- *Type:* string[]

---

##### `SamenessGroupConsumersInput`<sup>Optional</sup> <a name="SamenessGroupConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput"></a>

```csharp
public string[] SamenessGroupConsumersInput { get; }
```

- *Type:* string[]

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput"></a>

```csharp
public string[] ServicesInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `PartitionConsumers`<sup>Required</sup> <a name="PartitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers"></a>

```csharp
public string[] PartitionConsumers { get; }
```

- *Type:* string[]

---

##### `PeerConsumers`<sup>Required</sup> <a name="PeerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers"></a>

```csharp
public string[] PeerConsumers { get; }
```

- *Type:* string[]

---

##### `SamenessGroupConsumers`<sup>Required</sup> <a name="SamenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers"></a>

```csharp
public string[] SamenessGroupConsumers { get; }
```

- *Type:* string[]

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services"></a>

```csharp
public string[] Services { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulConfigEntryV2ExportedServicesConfig <a name="DataConsulConfigEntryV2ExportedServicesConfig" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulConfigEntryV2ExportedServicesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Kind,
    string Name,
    string Id = null,
    string Namespace = null,
    string Partition = null,
    string[] PartitionConsumers = null,
    string[] PeerConsumers = null,
    string[] SamenessGroupConsumers = null,
    string[] Services = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind">Kind</a></code> | <code>string</code> | The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices). |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name">Name</a></code> | <code>string</code> | The name of the config entry to read. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition">Partition</a></code> | <code>string</code> | The partition the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers">PartitionConsumers</a></code> | <code>string[]</code> | The exported service partition consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers">PeerConsumers</a></code> | <code>string[]</code> | The exported service peer consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers">SamenessGroupConsumers</a></code> | <code>string[]</code> | The exported service sameness group consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services">Services</a></code> | <code>string[]</code> | The exported services. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#kind DataConsulConfigEntryV2ExportedServices#kind}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the config entry to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#name DataConsulConfigEntryV2ExportedServices#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#namespace DataConsulConfigEntryV2ExportedServices#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

The partition the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition DataConsulConfigEntryV2ExportedServices#partition}

---

##### `PartitionConsumers`<sup>Optional</sup> <a name="PartitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers"></a>

```csharp
public string[] PartitionConsumers { get; set; }
```

- *Type:* string[]

The exported service partition consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition_consumers DataConsulConfigEntryV2ExportedServices#partition_consumers}

---

##### `PeerConsumers`<sup>Optional</sup> <a name="PeerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers"></a>

```csharp
public string[] PeerConsumers { get; set; }
```

- *Type:* string[]

The exported service peer consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#peer_consumers DataConsulConfigEntryV2ExportedServices#peer_consumers}

---

##### `SamenessGroupConsumers`<sup>Optional</sup> <a name="SamenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers"></a>

```csharp
public string[] SamenessGroupConsumers { get; set; }
```

- *Type:* string[]

The exported service sameness group consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#sameness_group_consumers DataConsulConfigEntryV2ExportedServices#sameness_group_consumers}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services"></a>

```csharp
public string[] Services { get; set; }
```

- *Type:* string[]

The exported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#services DataConsulConfigEntryV2ExportedServices#services}

---



