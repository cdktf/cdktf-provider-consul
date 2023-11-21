# `data_consul_network_segments`

Refer to the Terraform Registory for docs: [`data_consul_network_segments`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments).

# `dataConsulNetworkSegments` Submodule <a name="`dataConsulNetworkSegments` Submodule" id="@cdktf/provider-consul.dataConsulNetworkSegments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulNetworkSegments <a name="DataConsulNetworkSegments" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments consul_network_segments}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNetworkSegments(Construct Scope, string Id, DataConsulNetworkSegmentsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig">DataConsulNetworkSegmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig">DataConsulNetworkSegmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulNetworkSegments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulNetworkSegments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulNetworkSegments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulNetworkSegments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulNetworkSegments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataConsulNetworkSegments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulNetworkSegments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulNetworkSegments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulNetworkSegments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.segments">Segments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Segments`<sup>Required</sup> <a name="Segments" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.segments"></a>

```csharp
public string[] Segments { get; }
```

- *Type:* string[]

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulNetworkSegmentsConfig <a name="DataConsulNetworkSegmentsConfig" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNetworkSegmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Datacenter = null,
    string Id = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#datacenter DataConsulNetworkSegments#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#id DataConsulNetworkSegments#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#token DataConsulNetworkSegments#token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#datacenter DataConsulNetworkSegments#datacenter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#id DataConsulNetworkSegments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulNetworkSegments.DataConsulNetworkSegmentsConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/network_segments#token DataConsulNetworkSegments#token}.

---



