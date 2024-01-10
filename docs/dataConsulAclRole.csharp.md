# `dataConsulAclRole` Submodule <a name="`dataConsulAclRole` Submodule" id="@cdktf/provider-consul.dataConsulAclRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAclRole <a name="DataConsulAclRole" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_role consul_acl_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRole(Construct Scope, string Id, DataConsulAclRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig">DataConsulAclRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig">DataConsulAclRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetPartition">ResetPartition</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.resetPartition"></a>

```csharp
private void ResetPartition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulAclRole resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulAclRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulAclRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulAclRole.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

DataConsulAclRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataConsulAclRole resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataConsulAclRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataConsulAclRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulAclRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.nodeIdentities">NodeIdentities</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList">DataConsulAclRoleNodeIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.policies">Policies</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList">DataConsulAclRolePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.serviceIdentities">ServiceIdentities</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList">DataConsulAclRoleServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.templatedPolicies">TemplatedPolicies</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList">DataConsulAclRoleTemplatedPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.partition">Partition</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NodeIdentities`<sup>Required</sup> <a name="NodeIdentities" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.nodeIdentities"></a>

```csharp
public DataConsulAclRoleNodeIdentitiesList NodeIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList">DataConsulAclRoleNodeIdentitiesList</a>

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.policies"></a>

```csharp
public DataConsulAclRolePoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList">DataConsulAclRolePoliciesList</a>

---

##### `ServiceIdentities`<sup>Required</sup> <a name="ServiceIdentities" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.serviceIdentities"></a>

```csharp
public DataConsulAclRoleServiceIdentitiesList ServiceIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList">DataConsulAclRoleServiceIdentitiesList</a>

---

##### `TemplatedPolicies`<sup>Required</sup> <a name="TemplatedPolicies" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.templatedPolicies"></a>

```csharp
public DataConsulAclRoleTemplatedPoliciesList TemplatedPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList">DataConsulAclRoleTemplatedPoliciesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAclRoleConfig <a name="DataConsulAclRoleConfig" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Namespace = null,
    string Partition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.name">Name</a></code> | <code>string</code> | The name of the ACL Role. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_role#id DataConsulAclRole#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace to lookup the role. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.partition">Partition</a></code> | <code>string</code> | The partition to lookup the role. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ACL Role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_role#name DataConsulAclRole#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_role#id DataConsulAclRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace to lookup the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_role#namespace DataConsulAclRole#namespace}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

The partition to lookup the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_role#partition DataConsulAclRole#partition}

---

### DataConsulAclRoleNodeIdentities <a name="DataConsulAclRoleNodeIdentities" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleNodeIdentities {

};
```


### DataConsulAclRolePolicies <a name="DataConsulAclRolePolicies" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRolePolicies {

};
```


### DataConsulAclRoleServiceIdentities <a name="DataConsulAclRoleServiceIdentities" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleServiceIdentities {

};
```


### DataConsulAclRoleTemplatedPolicies <a name="DataConsulAclRoleTemplatedPolicies" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleTemplatedPolicies {

};
```


### DataConsulAclRoleTemplatedPoliciesTemplateVariables <a name="DataConsulAclRoleTemplatedPoliciesTemplateVariables" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleTemplatedPoliciesTemplateVariables {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulAclRoleNodeIdentitiesList <a name="DataConsulAclRoleNodeIdentitiesList" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleNodeIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.get"></a>

```csharp
private DataConsulAclRoleNodeIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulAclRoleNodeIdentitiesOutputReference <a name="DataConsulAclRoleNodeIdentitiesOutputReference" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleNodeIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentities">DataConsulAclRoleNodeIdentities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentitiesOutputReference.property.internalValue"></a>

```csharp
public DataConsulAclRoleNodeIdentities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleNodeIdentities">DataConsulAclRoleNodeIdentities</a>

---


### DataConsulAclRolePoliciesList <a name="DataConsulAclRolePoliciesList" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRolePoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.get"></a>

```csharp
private DataConsulAclRolePoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulAclRolePoliciesOutputReference <a name="DataConsulAclRolePoliciesOutputReference" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRolePoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePolicies">DataConsulAclRolePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePoliciesOutputReference.property.internalValue"></a>

```csharp
public DataConsulAclRolePolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRolePolicies">DataConsulAclRolePolicies</a>

---


### DataConsulAclRoleServiceIdentitiesList <a name="DataConsulAclRoleServiceIdentitiesList" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleServiceIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.get"></a>

```csharp
private DataConsulAclRoleServiceIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulAclRoleServiceIdentitiesOutputReference <a name="DataConsulAclRoleServiceIdentitiesOutputReference" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleServiceIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.datacenters">Datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentities">DataConsulAclRoleServiceIdentities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Datacenters`<sup>Required</sup> <a name="Datacenters" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.datacenters"></a>

```csharp
public string[] Datacenters { get; }
```

- *Type:* string[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentitiesOutputReference.property.internalValue"></a>

```csharp
public DataConsulAclRoleServiceIdentities InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleServiceIdentities">DataConsulAclRoleServiceIdentities</a>

---


### DataConsulAclRoleTemplatedPoliciesList <a name="DataConsulAclRoleTemplatedPoliciesList" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleTemplatedPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.get"></a>

```csharp
private DataConsulAclRoleTemplatedPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulAclRoleTemplatedPoliciesOutputReference <a name="DataConsulAclRoleTemplatedPoliciesOutputReference" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleTemplatedPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.datacenters">Datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.templateVariables">TemplateVariables</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList">DataConsulAclRoleTemplatedPoliciesTemplateVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPolicies">DataConsulAclRoleTemplatedPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Datacenters`<sup>Required</sup> <a name="Datacenters" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.datacenters"></a>

```csharp
public string[] Datacenters { get; }
```

- *Type:* string[]

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `TemplateVariables`<sup>Required</sup> <a name="TemplateVariables" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.templateVariables"></a>

```csharp
public DataConsulAclRoleTemplatedPoliciesTemplateVariablesList TemplateVariables { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList">DataConsulAclRoleTemplatedPoliciesTemplateVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataConsulAclRoleTemplatedPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPolicies">DataConsulAclRoleTemplatedPolicies</a>

---


### DataConsulAclRoleTemplatedPoliciesTemplateVariablesList <a name="DataConsulAclRoleTemplatedPoliciesTemplateVariablesList" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleTemplatedPoliciesTemplateVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.get"></a>

```csharp
private DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference <a name="DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariables">DataConsulAclRoleTemplatedPoliciesTemplateVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariablesOutputReference.property.internalValue"></a>

```csharp
public DataConsulAclRoleTemplatedPoliciesTemplateVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAclRole.DataConsulAclRoleTemplatedPoliciesTemplateVariables">DataConsulAclRoleTemplatedPoliciesTemplateVariables</a>

---



