# `dataConsulServiceHealth` Submodule <a name="`dataConsulServiceHealth` Submodule" id="@cdktf/provider-consul.dataConsulServiceHealth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulServiceHealth <a name="DataConsulServiceHealth" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health consul_service_health}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealth(Construct Scope, string Id, DataConsulServiceHealthConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig">DataConsulServiceHealthConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig">DataConsulServiceHealthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNear">ResetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNodeMeta">ResetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetPassing">ResetPassing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetWaitFor">ResetWaitFor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNear` <a name="ResetNear" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNear"></a>

```csharp
private void ResetNear()
```

##### `ResetNodeMeta` <a name="ResetNodeMeta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetNodeMeta"></a>

```csharp
private void ResetNodeMeta()
```

##### `ResetPassing` <a name="ResetPassing" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetPassing"></a>

```csharp
private void ResetPassing()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetWaitFor` <a name="ResetWaitFor" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.resetWaitFor"></a>

```csharp
private void ResetWaitFor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulServiceHealth resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulServiceHealth.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulServiceHealth.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulServiceHealth.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulServiceHealth.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataConsulServiceHealth resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulServiceHealth to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulServiceHealth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulServiceHealth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.results">Results</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList">DataConsulServiceHealthResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nearInput">NearInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMetaInput">NodeMetaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passingInput">PassingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitForInput">WaitForInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.near">Near</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMeta">NodeMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passing">Passing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitFor">WaitFor</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.results"></a>

```csharp
public DataConsulServiceHealthResultsList Results { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList">DataConsulServiceHealthResultsList</a>

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NearInput`<sup>Optional</sup> <a name="NearInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nearInput"></a>

```csharp
public string NearInput { get; }
```

- *Type:* string

---

##### `NodeMetaInput`<sup>Optional</sup> <a name="NodeMetaInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMetaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMetaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PassingInput`<sup>Optional</sup> <a name="PassingInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passingInput"></a>

```csharp
public object PassingInput { get; }
```

- *Type:* object

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `WaitForInput`<sup>Optional</sup> <a name="WaitForInput" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitForInput"></a>

```csharp
public string WaitForInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Near`<sup>Required</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.near"></a>

```csharp
public string Near { get; }
```

- *Type:* string

---

##### `NodeMeta`<sup>Required</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.nodeMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMeta { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Passing`<sup>Required</sup> <a name="Passing" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.passing"></a>

```csharp
public object Passing { get; }
```

- *Type:* object

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `WaitFor`<sup>Required</sup> <a name="WaitFor" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.waitFor"></a>

```csharp
public string WaitFor { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealth.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulServiceHealthConfig <a name="DataConsulServiceHealthConfig" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Datacenter = null,
    string Filter = null,
    string Id = null,
    string Near = null,
    System.Collections.Generic.IDictionary<string, string> NodeMeta = null,
    object Passing = null,
    string Tag = null,
    string WaitFor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#name DataConsulServiceHealth#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#datacenter DataConsulServiceHealth#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#filter DataConsulServiceHealth#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#id DataConsulServiceHealth#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.near">Near</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#near DataConsulServiceHealth#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.nodeMeta">NodeMeta</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#node_meta DataConsulServiceHealth#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.passing">Passing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#passing DataConsulServiceHealth#passing}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.tag">Tag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#tag DataConsulServiceHealth#tag}. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.waitFor">WaitFor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#wait_for DataConsulServiceHealth#wait_for}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#name DataConsulServiceHealth#name}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#datacenter DataConsulServiceHealth#datacenter}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#filter DataConsulServiceHealth#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#id DataConsulServiceHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Near`<sup>Optional</sup> <a name="Near" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.near"></a>

```csharp
public string Near { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#near DataConsulServiceHealth#near}.

---

##### `NodeMeta`<sup>Optional</sup> <a name="NodeMeta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.nodeMeta"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeMeta { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#node_meta DataConsulServiceHealth#node_meta}.

---

##### `Passing`<sup>Optional</sup> <a name="Passing" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.passing"></a>

```csharp
public object Passing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#passing DataConsulServiceHealth#passing}.

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#tag DataConsulServiceHealth#tag}.

---

##### `WaitFor`<sup>Optional</sup> <a name="WaitFor" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthConfig.property.waitFor"></a>

```csharp
public string WaitFor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service_health#wait_for DataConsulServiceHealth#wait_for}.

---

### DataConsulServiceHealthResults <a name="DataConsulServiceHealthResults" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResults {

};
```


### DataConsulServiceHealthResultsChecks <a name="DataConsulServiceHealthResultsChecks" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsChecks {

};
```


### DataConsulServiceHealthResultsNode <a name="DataConsulServiceHealthResultsNode" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsNode {

};
```


### DataConsulServiceHealthResultsService <a name="DataConsulServiceHealthResultsService" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsService {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulServiceHealthResultsChecksList <a name="DataConsulServiceHealthResultsChecksList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.get"></a>

```csharp
private DataConsulServiceHealthResultsChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulServiceHealthResultsChecksOutputReference <a name="DataConsulServiceHealthResultsChecksOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.nodeAttribute">NodeAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.output">Output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceTags">ServiceTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks">DataConsulServiceHealthResultsChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeAttribute`<sup>Required</sup> <a name="NodeAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.nodeAttribute"></a>

```csharp
public string NodeAttribute { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.output"></a>

```csharp
public string Output { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceTags`<sup>Required</sup> <a name="ServiceTags" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.serviceTags"></a>

```csharp
public string[] ServiceTags { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksOutputReference.property.internalValue"></a>

```csharp
public DataConsulServiceHealthResultsChecks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecks">DataConsulServiceHealthResultsChecks</a>

---


### DataConsulServiceHealthResultsList <a name="DataConsulServiceHealthResultsList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.get"></a>

```csharp
private DataConsulServiceHealthResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulServiceHealthResultsNodeList <a name="DataConsulServiceHealthResultsNodeList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsNodeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.get"></a>

```csharp
private DataConsulServiceHealthResultsNodeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulServiceHealthResultsNodeOutputReference <a name="DataConsulServiceHealthResultsNodeOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsNodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.meta">Meta</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.taggedAddresses">TaggedAddresses</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode">DataConsulServiceHealthResultsNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.meta"></a>

```csharp
public StringMap Meta { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TaggedAddresses`<sup>Required</sup> <a name="TaggedAddresses" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.taggedAddresses"></a>

```csharp
public StringMap TaggedAddresses { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeOutputReference.property.internalValue"></a>

```csharp
public DataConsulServiceHealthResultsNode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNode">DataConsulServiceHealthResultsNode</a>

---


### DataConsulServiceHealthResultsOutputReference <a name="DataConsulServiceHealthResultsOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.checks">Checks</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList">DataConsulServiceHealthResultsChecksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.nodeAttribute">NodeAttribute</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList">DataConsulServiceHealthResultsNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.service">Service</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList">DataConsulServiceHealthResultsServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults">DataConsulServiceHealthResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Checks`<sup>Required</sup> <a name="Checks" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.checks"></a>

```csharp
public DataConsulServiceHealthResultsChecksList Checks { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsChecksList">DataConsulServiceHealthResultsChecksList</a>

---

##### `NodeAttribute`<sup>Required</sup> <a name="NodeAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.nodeAttribute"></a>

```csharp
public DataConsulServiceHealthResultsNodeList NodeAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsNodeList">DataConsulServiceHealthResultsNodeList</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.service"></a>

```csharp
public DataConsulServiceHealthResultsServiceList Service { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList">DataConsulServiceHealthResultsServiceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsOutputReference.property.internalValue"></a>

```csharp
public DataConsulServiceHealthResults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResults">DataConsulServiceHealthResults</a>

---


### DataConsulServiceHealthResultsServiceList <a name="DataConsulServiceHealthResultsServiceList" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsServiceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.get"></a>

```csharp
private DataConsulServiceHealthResultsServiceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulServiceHealthResultsServiceOutputReference <a name="DataConsulServiceHealthResultsServiceOutputReference" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulServiceHealthResultsServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.meta">Meta</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService">DataConsulServiceHealthResultsService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.meta"></a>

```csharp
public StringMap Meta { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsServiceOutputReference.property.internalValue"></a>

```csharp
public DataConsulServiceHealthResultsService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulServiceHealth.DataConsulServiceHealthResultsService">DataConsulServiceHealthResultsService</a>

---



