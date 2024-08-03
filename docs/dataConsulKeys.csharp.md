# `dataConsulKeys` Submodule <a name="`dataConsulKeys` Submodule" id="@cdktf/provider-consul.dataConsulKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulKeys <a name="DataConsulKeys" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys consul_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulKeys(Construct Scope, string Id, DataConsulKeysConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig">DataConsulKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig">DataConsulKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.putKey">PutKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetErrorOnMissingKeys">ResetErrorOnMissingKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutKey` <a name="PutKey" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.putKey"></a>

```csharp
private void PutKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.putKey.parameter.value"></a>

- *Type:* object

---

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetErrorOnMissingKeys` <a name="ResetErrorOnMissingKeys" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetErrorOnMissingKeys"></a>

```csharp
private void ResetErrorOnMissingKeys()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulKeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulKeys.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataConsulKeys resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulKeys to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.key">Key</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList">DataConsulKeysKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.var">Var</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.errorOnMissingKeysInput">ErrorOnMissingKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.keyInput">KeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.errorOnMissingKeys">ErrorOnMissingKeys</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.key"></a>

```csharp
public DataConsulKeysKeyList Key { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList">DataConsulKeysKeyList</a>

---

##### `Var`<sup>Required</sup> <a name="Var" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.var"></a>

```csharp
public StringMap Var { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `ErrorOnMissingKeysInput`<sup>Optional</sup> <a name="ErrorOnMissingKeysInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.errorOnMissingKeysInput"></a>

```csharp
public object ErrorOnMissingKeysInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.keyInput"></a>

```csharp
public object KeyInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `ErrorOnMissingKeys`<sup>Required</sup> <a name="ErrorOnMissingKeys" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.errorOnMissingKeys"></a>

```csharp
public object ErrorOnMissingKeys { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulKeysConfig <a name="DataConsulKeysConfig" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulKeysConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Datacenter = null,
    object ErrorOnMissingKeys = null,
    string Id = null,
    object Key = null,
    string Namespace = null,
    string Partition = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.errorOnMissingKeys">ErrorOnMissingKeys</a></code> | <code>object</code> | Whether to return an error when a key is absent from the KV store and no default is configured. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#id DataConsulKeys#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.key">Key</a></code> | <code>object</code> | key block. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace to lookup the keys. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.partition">Partition</a></code> | <code>string</code> | The partition to lookup the keys. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.token">Token</a></code> | <code>string</code> | The ACL token to use. This overrides the token that the agent provides by default. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

The datacenter to use. This overrides the agent's default datacenter and the datacenter in the provider setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#datacenter DataConsulKeys#datacenter}

---

##### `ErrorOnMissingKeys`<sup>Optional</sup> <a name="ErrorOnMissingKeys" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.errorOnMissingKeys"></a>

```csharp
public object ErrorOnMissingKeys { get; set; }
```

- *Type:* object

Whether to return an error when a key is absent from the KV store and no default is configured.

This defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#error_on_missing_keys DataConsulKeys#error_on_missing_keys}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#id DataConsulKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.key"></a>

```csharp
public object Key { get; set; }
```

- *Type:* object

key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#key DataConsulKeys#key}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace to lookup the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#namespace DataConsulKeys#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

The partition to lookup the keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#partition DataConsulKeys#partition}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The ACL token to use. This overrides the token that the agent provides by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#token DataConsulKeys#token}

---

### DataConsulKeysKey <a name="DataConsulKeysKey" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulKeysKey {
    string Name,
    string Path,
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey.property.name">Name</a></code> | <code>string</code> | This is the name of the key. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey.property.path">Path</a></code> | <code>string</code> | This is the path in Consul that should be read or written to. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey.property.default">Default</a></code> | <code>string</code> | This is the default value to set for `var.<name>` if the key does not exist in Consul. Defaults to an empty string. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

This is the name of the key.

This value of the key is exposed as `var.<name>`. This is not the path of the key in Consul.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#name DataConsulKeys#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

This is the path in Consul that should be read or written to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#path DataConsulKeys#path}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKey.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

This is the default value to set for `var.<name>` if the key does not exist in Consul. Defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/keys#default DataConsulKeys#default}

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulKeysKeyList <a name="DataConsulKeysKeyList" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulKeysKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.get"></a>

```csharp
private DataConsulKeysKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataConsulKeysKeyOutputReference <a name="DataConsulKeysKeyOutputReference" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulKeysKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulKeys.DataConsulKeysKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



