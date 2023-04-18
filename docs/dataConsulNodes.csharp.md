# `data_consul_nodes`

Refer to the Terraform Registory for docs: [`data_consul_nodes`](https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes).

# `dataConsulNodes` Submodule <a name="`dataConsulNodes` Submodule" id="@cdktf/provider-consul.dataConsulNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulNodes <a name="DataConsulNodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes consul_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodes(Construct Scope, string Id, DataConsulNodesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig">DataConsulNodesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig">DataConsulNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions">PutQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetQueryOptions">ResetQueryOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutQueryOptions` <a name="PutQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions"></a>

```csharp
private void PutQueryOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQueryOptions` <a name="ResetQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetQueryOptions"></a>

```csharp
private void ResetQueryOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulNodes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulNodes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulNodes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeIds">NodeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeNames">NodeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList">DataConsulNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptions">QueryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList">DataConsulNodesQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptionsInput">QueryOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `NodeIds`<sup>Required</sup> <a name="NodeIds" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeIds"></a>

```csharp
public string[] NodeIds { get; }
```

- *Type:* string[]

---

##### `NodeNames`<sup>Required</sup> <a name="NodeNames" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeNames"></a>

```csharp
public string[] NodeNames { get; }
```

- *Type:* string[]

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodes"></a>

```csharp
public DataConsulNodesNodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList">DataConsulNodesNodesList</a>

---

##### `QueryOptions`<sup>Required</sup> <a name="QueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptions"></a>

```csharp
public DataConsulNodesQueryOptionsList QueryOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList">DataConsulNodesQueryOptionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QueryOptionsInput`<sup>Optional</sup> <a name="QueryOptionsInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptionsInput"></a>

```csharp
public object QueryOptionsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulNodesConfig <a name="DataConsulNodesConfig" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    object QueryOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#id DataConsulNodes#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.queryOptions">QueryOptions</a></code> | <code>object</code> | query_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#id DataConsulNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `QueryOptions`<sup>Optional</sup> <a name="QueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.queryOptions"></a>

```csharp
public object QueryOptions { get; set; }
```

- *Type:* object

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#query_options DataConsulNodes#query_options}

---

### DataConsulNodesNodes <a name="DataConsulNodesNodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodesNodes {

};
```


### DataConsulNodesQueryOptions <a name="DataConsulNodesQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodesQueryOptions {
    object AllowStale = null,
    string Datacenter = null,
    string Near = null,
    System.Collections.Generic.IDictionary<string, string> NodeMeta = null,
    string Partition = null,
    object RequireConsistent = null,
    string Token = null,
    double WaitIndex = null,
    string WaitTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.allowStale">AllowStale</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#allow_stale DataConsulNodes#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.datacenter">Datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#datacenter DataConsulNodes#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.near">Near</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#near DataConsulNodes#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.nodeMeta">NodeMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#node_meta DataConsulNodes#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.partition">Partition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#partition DataConsulNodes#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.requireConsistent">RequireConsistent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#require_consistent DataConsulNodes#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#token DataConsulNodes#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitIndex">WaitIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#wait_index DataConsulNodes#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitTime">WaitTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#wait_time DataConsulNodes#wait_time}. |

---

##### `AllowStale`<sup>Optional</sup> <a name="AllowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.allowStale"></a>

```csharp
public object AllowStale { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#allow_stale DataConsulNodes#allow_stale}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#datacenter DataConsulNodes#datacenter}.

---

##### `Near`<sup>Optional</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.near"></a>

```csharp
public string Near { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#near DataConsulNodes#near}.

---

##### `NodeMeta`<sup>Optional</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.nodeMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMeta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#node_meta DataConsulNodes#node_meta}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#partition DataConsulNodes#partition}.

---

##### `RequireConsistent`<sup>Optional</sup> <a name="RequireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.requireConsistent"></a>

```csharp
public object RequireConsistent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#require_consistent DataConsulNodes#require_consistent}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#token DataConsulNodes#token}.

---

##### `WaitIndex`<sup>Optional</sup> <a name="WaitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitIndex"></a>

```csharp
public double WaitIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#wait_index DataConsulNodes#wait_index}.

---

##### `WaitTime`<sup>Optional</sup> <a name="WaitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitTime"></a>

```csharp
public string WaitTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/nodes#wait_time DataConsulNodes#wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulNodesNodesList <a name="DataConsulNodesNodesList" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodesNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get"></a>

```csharp
private DataConsulNodesNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulNodesNodesOutputReference <a name="DataConsulNodesNodesOutputReference" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodesNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.meta">Meta</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.taggedAddresses">TaggedAddresses</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes">DataConsulNodesNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.meta"></a>

```csharp
public StringMap Meta { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TaggedAddresses`<sup>Required</sup> <a name="TaggedAddresses" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.taggedAddresses"></a>

```csharp
public StringMap TaggedAddresses { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.internalValue"></a>

```csharp
public DataConsulNodesNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes">DataConsulNodesNodes</a>

---


### DataConsulNodesQueryOptionsList <a name="DataConsulNodesQueryOptionsList" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodesQueryOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get"></a>

```csharp
private DataConsulNodesQueryOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataConsulNodesQueryOptionsOutputReference <a name="DataConsulNodesQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulNodesQueryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetAllowStale">ResetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNear">ResetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNodeMeta">ResetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetRequireConsistent">ResetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitIndex">ResetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitTime">ResetWaitTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowStale` <a name="ResetAllowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetAllowStale"></a>

```csharp
private void ResetAllowStale()
```

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetNear` <a name="ResetNear" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNear"></a>

```csharp
private void ResetNear()
```

##### `ResetNodeMeta` <a name="ResetNodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNodeMeta"></a>

```csharp
private void ResetNodeMeta()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetRequireConsistent` <a name="ResetRequireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetRequireConsistent"></a>

```csharp
private void ResetRequireConsistent()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetWaitIndex` <a name="ResetWaitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitIndex"></a>

```csharp
private void ResetWaitIndex()
```

##### `ResetWaitTime` <a name="ResetWaitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitTime"></a>

```csharp
private void ResetWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStaleInput">AllowStaleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nearInput">NearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMetaInput">NodeMetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistentInput">RequireConsistentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndexInput">WaitIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTimeInput">WaitTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStale">AllowStale</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.near">Near</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMeta">NodeMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistent">RequireConsistent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndex">WaitIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTime">WaitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowStaleInput`<sup>Optional</sup> <a name="AllowStaleInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStaleInput"></a>

```csharp
public object AllowStaleInput { get; }
```

- *Type:* object

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `NearInput`<sup>Optional</sup> <a name="NearInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nearInput"></a>

```csharp
public string NearInput { get; }
```

- *Type:* string

---

##### `NodeMetaInput`<sup>Optional</sup> <a name="NodeMetaInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMetaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `RequireConsistentInput`<sup>Optional</sup> <a name="RequireConsistentInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistentInput"></a>

```csharp
public object RequireConsistentInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `WaitIndexInput`<sup>Optional</sup> <a name="WaitIndexInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndexInput"></a>

```csharp
public double WaitIndexInput { get; }
```

- *Type:* double

---

##### `WaitTimeInput`<sup>Optional</sup> <a name="WaitTimeInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTimeInput"></a>

```csharp
public string WaitTimeInput { get; }
```

- *Type:* string

---

##### `AllowStale`<sup>Required</sup> <a name="AllowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStale"></a>

```csharp
public object AllowStale { get; }
```

- *Type:* object

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Near`<sup>Required</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.near"></a>

```csharp
public string Near { get; }
```

- *Type:* string

---

##### `NodeMeta`<sup>Required</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMeta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `RequireConsistent`<sup>Required</sup> <a name="RequireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistent"></a>

```csharp
public object RequireConsistent { get; }
```

- *Type:* object

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `WaitIndex`<sup>Required</sup> <a name="WaitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndex"></a>

```csharp
public double WaitIndex { get; }
```

- *Type:* double

---

##### `WaitTime`<sup>Required</sup> <a name="WaitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTime"></a>

```csharp
public string WaitTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



