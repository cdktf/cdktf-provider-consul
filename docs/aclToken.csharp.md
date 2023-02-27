# `aclToken` Submodule <a name="`aclToken` Submodule" id="@cdktf/provider-consul.aclToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclToken <a name="AclToken" id="@cdktf/provider-consul.aclToken.AclToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul/r/acl_token consul_acl_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclToken(Construct Scope, string Id, AclTokenConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig">AclTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-consul.aclToken.AclToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenConfig">AclTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities">PutNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities">PutServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetAccessorId">ResetAccessorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetLocal">ResetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetNodeIdentities">ResetNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.resetServiceIdentities">ResetServiceIdentities</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclToken.AclToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.aclToken.AclToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.aclToken.AclToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.aclToken.AclToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.aclToken.AclToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.aclToken.AclToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.aclToken.AclToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.aclToken.AclToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNodeIdentities` <a name="PutNodeIdentities" id="@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities"></a>

```csharp
private void PutNodeIdentities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.aclToken.AclToken.putNodeIdentities.parameter.value"></a>

- *Type:* object

---

##### `PutServiceIdentities` <a name="PutServiceIdentities" id="@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities"></a>

```csharp
private void PutServiceIdentities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.aclToken.AclToken.putServiceIdentities.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessorId` <a name="ResetAccessorId" id="@cdktf/provider-consul.aclToken.AclToken.resetAccessorId"></a>

```csharp
private void ResetAccessorId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-consul.aclToken.AclToken.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-consul.aclToken.AclToken.resetExpirationTime"></a>

```csharp
private void ResetExpirationTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.aclToken.AclToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocal` <a name="ResetLocal" id="@cdktf/provider-consul.aclToken.AclToken.resetLocal"></a>

```csharp
private void ResetLocal()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.aclToken.AclToken.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNodeIdentities` <a name="ResetNodeIdentities" id="@cdktf/provider-consul.aclToken.AclToken.resetNodeIdentities"></a>

```csharp
private void ResetNodeIdentities()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.aclToken.AclToken.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-consul.aclToken.AclToken.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-consul.aclToken.AclToken.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetServiceIdentities` <a name="ResetServiceIdentities" id="@cdktf/provider-consul.aclToken.AclToken.resetServiceIdentities"></a>

```csharp
private void ResetServiceIdentities()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.aclToken.AclToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AclToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.aclToken.AclToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AclToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AclToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.aclToken.AclToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentities">NodeIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList">AclTokenNodeIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentities">ServiceIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList">AclTokenServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.accessorIdInput">AccessorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.localInput">LocalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentitiesInput">NodeIdentitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentitiesInput">ServiceIdentitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.accessorId">AccessorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.local">Local</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.aclToken.AclToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.aclToken.AclToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclToken.AclToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.aclToken.AclToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.aclToken.AclToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclToken.AclToken.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclToken.AclToken.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclToken.AclToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclToken.AclToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclToken.AclToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclToken.AclToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclToken.AclToken.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NodeIdentities`<sup>Required</sup> <a name="NodeIdentities" id="@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentities"></a>

```csharp
public AclTokenNodeIdentitiesList NodeIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList">AclTokenNodeIdentitiesList</a>

---

##### `ServiceIdentities`<sup>Required</sup> <a name="ServiceIdentities" id="@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentities"></a>

```csharp
public AclTokenServiceIdentitiesList ServiceIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList">AclTokenServiceIdentitiesList</a>

---

##### `AccessorIdInput`<sup>Optional</sup> <a name="AccessorIdInput" id="@cdktf/provider-consul.aclToken.AclToken.property.accessorIdInput"></a>

```csharp
public string AccessorIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-consul.aclToken.AclToken.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-consul.aclToken.AclToken.property.expirationTimeInput"></a>

```csharp
public string ExpirationTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.aclToken.AclToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalInput`<sup>Optional</sup> <a name="LocalInput" id="@cdktf/provider-consul.aclToken.AclToken.property.localInput"></a>

```csharp
public object LocalInput { get; }
```

- *Type:* object

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.aclToken.AclToken.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NodeIdentitiesInput`<sup>Optional</sup> <a name="NodeIdentitiesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.nodeIdentitiesInput"></a>

```csharp
public object NodeIdentitiesInput { get; }
```

- *Type:* object

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.aclToken.AclToken.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `ServiceIdentitiesInput`<sup>Optional</sup> <a name="ServiceIdentitiesInput" id="@cdktf/provider-consul.aclToken.AclToken.property.serviceIdentitiesInput"></a>

```csharp
public object ServiceIdentitiesInput { get; }
```

- *Type:* object

---

##### `AccessorId`<sup>Required</sup> <a name="AccessorId" id="@cdktf/provider-consul.aclToken.AclToken.property.accessorId"></a>

```csharp
public string AccessorId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-consul.aclToken.AclToken.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-consul.aclToken.AclToken.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.aclToken.AclToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Local`<sup>Required</sup> <a name="Local" id="@cdktf/provider-consul.aclToken.AclToken.property.local"></a>

```csharp
public object Local { get; }
```

- *Type:* object

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.aclToken.AclToken.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.aclToken.AclToken.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-consul.aclToken.AclToken.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-consul.aclToken.AclToken.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.aclToken.AclToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclTokenConfig <a name="AclTokenConfig" id="@cdktf/provider-consul.aclToken.AclTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclTokenConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessorId = null,
    string Description = null,
    string ExpirationTime = null,
    string Id = null,
    object Local = null,
    string Namespace = null,
    object NodeIdentities = null,
    string Partition = null,
    string[] Policies = null,
    string[] Roles = null,
    object ServiceIdentities = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.accessorId">AccessorId</a></code> | <code>string</code> | The token id. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.description">Description</a></code> | <code>string</code> | The token description. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | If set this represents the point after which a token should be considered revoked and is eligible for destruction. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#id AclToken#id}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.local">Local</a></code> | <code>object</code> | Flag to set the token local to the current datacenter. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#namespace AclToken#namespace}. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.nodeIdentities">NodeIdentities</a></code> | <code>object</code> | node_identities block. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.partition">Partition</a></code> | <code>string</code> | The partition the ACL token is associated with. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.policies">Policies</a></code> | <code>string[]</code> | List of policies. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.roles">Roles</a></code> | <code>string[]</code> | List of roles. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenConfig.property.serviceIdentities">ServiceIdentities</a></code> | <code>object</code> | service_identities block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessorId`<sup>Optional</sup> <a name="AccessorId" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.accessorId"></a>

```csharp
public string AccessorId { get; set; }
```

- *Type:* string

The token id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#accessor_id AclToken#accessor_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The token description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#description AclToken#description}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; set; }
```

- *Type:* string

If set this represents the point after which a token should be considered revoked and is eligible for destruction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#expiration_time AclToken#expiration_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#id AclToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Local`<sup>Optional</sup> <a name="Local" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.local"></a>

```csharp
public object Local { get; set; }
```

- *Type:* object

Flag to set the token local to the current datacenter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#local AclToken#local}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#namespace AclToken#namespace}.

---

##### `NodeIdentities`<sup>Optional</sup> <a name="NodeIdentities" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.nodeIdentities"></a>

```csharp
public object NodeIdentities { get; set; }
```

- *Type:* object

node_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#node_identities AclToken#node_identities}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

The partition the ACL token is associated with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#partition AclToken#partition}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

List of policies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#policies AclToken#policies}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

List of roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#roles AclToken#roles}

---

##### `ServiceIdentities`<sup>Optional</sup> <a name="ServiceIdentities" id="@cdktf/provider-consul.aclToken.AclTokenConfig.property.serviceIdentities"></a>

```csharp
public object ServiceIdentities { get; set; }
```

- *Type:* object

service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#service_identities AclToken#service_identities}

---

### AclTokenNodeIdentities <a name="AclTokenNodeIdentities" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclTokenNodeIdentities {
    string Datacenter,
    string NodeName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.datacenter">Datacenter</a></code> | <code>string</code> | Specifies the node's datacenter. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.nodeName">NodeName</a></code> | <code>string</code> | The name of the node. |

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Specifies the node's datacenter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#datacenter AclToken#datacenter}

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentities.property.nodeName"></a>

```csharp
public string NodeName { get; set; }
```

- *Type:* string

The name of the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#node_name AclToken#node_name}

---

### AclTokenServiceIdentities <a name="AclTokenServiceIdentities" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclTokenServiceIdentities {
    string ServiceName,
    string[] Datacenters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.datacenters">Datacenters</a></code> | <code>string[]</code> | Specifies the datacenters the effective policy is valid within. |

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#service_name AclToken#service_name}

---

##### `Datacenters`<sup>Optional</sup> <a name="Datacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentities.property.datacenters"></a>

```csharp
public string[] Datacenters { get; set; }
```

- *Type:* string[]

Specifies the datacenters the effective policy is valid within.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_token#datacenters AclToken#datacenters}

---

## Classes <a name="Classes" id="Classes"></a>

### AclTokenNodeIdentitiesList <a name="AclTokenNodeIdentitiesList" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclTokenNodeIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get"></a>

```csharp
private AclTokenNodeIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AclTokenNodeIdentitiesOutputReference <a name="AclTokenNodeIdentitiesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclTokenNodeIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeNameInput"></a>

```csharp
public string NodeNameInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclToken.AclTokenNodeIdentitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AclTokenServiceIdentitiesList <a name="AclTokenServiceIdentitiesList" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclTokenServiceIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get"></a>

```csharp
private AclTokenServiceIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AclTokenServiceIdentitiesOutputReference <a name="AclTokenServiceIdentitiesOutputReference" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclTokenServiceIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resetDatacenters">ResetDatacenters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatacenters` <a name="ResetDatacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.resetDatacenters"></a>

```csharp
private void ResetDatacenters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacentersInput">DatacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacenters">Datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatacentersInput`<sup>Optional</sup> <a name="DatacentersInput" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacentersInput"></a>

```csharp
public string[] DatacentersInput { get; }
```

- *Type:* string[]

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `Datacenters`<sup>Required</sup> <a name="Datacenters" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.datacenters"></a>

```csharp
public string[] Datacenters { get; }
```

- *Type:* string[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclToken.AclTokenServiceIdentitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


