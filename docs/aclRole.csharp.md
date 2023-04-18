# `consul_acl_role`

Refer to the Terraform Registory for docs: [`consul_acl_role`](https://www.terraform.io/docs/providers/consul/r/acl_role).

# `aclRole` Submodule <a name="`aclRole` Submodule" id="@cdktf/provider-consul.aclRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AclRole <a name="AclRole" id="@cdktf/provider-consul.aclRole.AclRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul/r/acl_role consul_acl_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRole(Construct Scope, string Id, AclRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig">AclRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.aclRole.AclRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleConfig">AclRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.putNodeIdentities">PutNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.putServiceIdentities">PutServiceIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetNodeIdentities">ResetNodeIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.resetServiceIdentities">ResetServiceIdentities</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclRole.AclRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.aclRole.AclRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.aclRole.AclRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.aclRole.AclRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.aclRole.AclRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.aclRole.AclRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.aclRole.AclRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.aclRole.AclRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.aclRole.AclRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNodeIdentities` <a name="PutNodeIdentities" id="@cdktf/provider-consul.aclRole.AclRole.putNodeIdentities"></a>

```csharp
private void PutNodeIdentities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.aclRole.AclRole.putNodeIdentities.parameter.value"></a>

- *Type:* object

---

##### `PutServiceIdentities` <a name="PutServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRole.putServiceIdentities"></a>

```csharp
private void PutServiceIdentities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.aclRole.AclRole.putServiceIdentities.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-consul.aclRole.AclRole.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.aclRole.AclRole.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.aclRole.AclRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNodeIdentities` <a name="ResetNodeIdentities" id="@cdktf/provider-consul.aclRole.AclRole.resetNodeIdentities"></a>

```csharp
private void ResetNodeIdentities()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.aclRole.AclRole.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-consul.aclRole.AclRole.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetServiceIdentities` <a name="ResetServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRole.resetServiceIdentities"></a>

```csharp
private void ResetServiceIdentities()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.aclRole.AclRole.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AclRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.aclRole.AclRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AclRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

AclRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.aclRole.AclRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentities">NodeIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList">AclRoleNodeIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentities">ServiceIdentities</a></code> | <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList">AclRoleServiceIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentitiesInput">NodeIdentitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentitiesInput">ServiceIdentitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.aclRole.AclRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.aclRole.AclRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclRole.AclRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.aclRole.AclRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.aclRole.AclRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.aclRole.AclRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.aclRole.AclRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclRole.AclRole.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclRole.AclRole.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclRole.AclRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclRole.AclRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclRole.AclRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclRole.AclRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclRole.AclRole.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `NodeIdentities`<sup>Required</sup> <a name="NodeIdentities" id="@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentities"></a>

```csharp
public AclRoleNodeIdentitiesList NodeIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList">AclRoleNodeIdentitiesList</a>

---

##### `ServiceIdentities`<sup>Required</sup> <a name="ServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentities"></a>

```csharp
public AclRoleServiceIdentitiesList ServiceIdentities { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList">AclRoleServiceIdentitiesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-consul.aclRole.AclRole.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.aclRole.AclRole.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-consul.aclRole.AclRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.aclRole.AclRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NodeIdentitiesInput`<sup>Optional</sup> <a name="NodeIdentitiesInput" id="@cdktf/provider-consul.aclRole.AclRole.property.nodeIdentitiesInput"></a>

```csharp
public object NodeIdentitiesInput { get; }
```

- *Type:* object

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.aclRole.AclRole.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-consul.aclRole.AclRole.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `ServiceIdentitiesInput`<sup>Optional</sup> <a name="ServiceIdentitiesInput" id="@cdktf/provider-consul.aclRole.AclRole.property.serviceIdentitiesInput"></a>

```csharp
public object ServiceIdentitiesInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-consul.aclRole.AclRole.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.aclRole.AclRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.aclRole.AclRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.aclRole.AclRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.aclRole.AclRole.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-consul.aclRole.AclRole.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.aclRole.AclRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AclRoleConfig <a name="AclRoleConfig" id="@cdktf/provider-consul.aclRole.AclRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRoleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    string Namespace = null,
    object NodeIdentities = null,
    string Partition = null,
    string[] Policies = null,
    object ServiceIdentities = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.name">Name</a></code> | <code>string</code> | The name of the ACL role. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.description">Description</a></code> | <code>string</code> | A free form human readable description of the role. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#id AclRole#id}. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#namespace AclRole#namespace}. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.nodeIdentities">NodeIdentities</a></code> | <code>object</code> | node_identities block. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.partition">Partition</a></code> | <code>string</code> | The partition the ACL role is associated with. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.policies">Policies</a></code> | <code>string[]</code> | The list of policies that should be applied to the role. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleConfig.property.serviceIdentities">ServiceIdentities</a></code> | <code>object</code> | service_identities block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ACL role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#name AclRole#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free form human readable description of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#description AclRole#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#id AclRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#namespace AclRole#namespace}.

---

##### `NodeIdentities`<sup>Optional</sup> <a name="NodeIdentities" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.nodeIdentities"></a>

```csharp
public object NodeIdentities { get; set; }
```

- *Type:* object

node_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#node_identities AclRole#node_identities}

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

The partition the ACL role is associated with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#partition AclRole#partition}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

The list of policies that should be applied to the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#policies AclRole#policies}

---

##### `ServiceIdentities`<sup>Optional</sup> <a name="ServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRoleConfig.property.serviceIdentities"></a>

```csharp
public object ServiceIdentities { get; set; }
```

- *Type:* object

service_identities block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#service_identities AclRole#service_identities}

---

### AclRoleNodeIdentities <a name="AclRoleNodeIdentities" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRoleNodeIdentities {
    string Datacenter,
    string NodeName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.datacenter">Datacenter</a></code> | <code>string</code> | Specifies the node's datacenter. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.nodeName">NodeName</a></code> | <code>string</code> | The name of the node. |

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Specifies the node's datacenter.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#datacenter AclRole#datacenter}

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentities.property.nodeName"></a>

```csharp
public string NodeName { get; set; }
```

- *Type:* string

The name of the node.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#node_name AclRole#node_name}

---

### AclRoleServiceIdentities <a name="AclRoleServiceIdentities" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRoleServiceIdentities {
    string ServiceName,
    string[] Datacenters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.datacenters">Datacenters</a></code> | <code>string[]</code> | The datacenters the effective policy is valid within. |

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#service_name AclRole#service_name}

---

##### `Datacenters`<sup>Optional</sup> <a name="Datacenters" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentities.property.datacenters"></a>

```csharp
public string[] Datacenters { get; set; }
```

- *Type:* string[]

The datacenters the effective policy is valid within.

When no datacenters are provided the effective policy is valid in all datacenters including those which do not yet exist but may in the future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/acl_role#datacenters AclRole#datacenters}

---

## Classes <a name="Classes" id="Classes"></a>

### AclRoleNodeIdentitiesList <a name="AclRoleNodeIdentitiesList" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRoleNodeIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.get"></a>

```csharp
private AclRoleNodeIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AclRoleNodeIdentitiesOutputReference <a name="AclRoleNodeIdentitiesOutputReference" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRoleNodeIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeNameInput"></a>

```csharp
public string NodeNameInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclRole.AclRoleNodeIdentitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AclRoleServiceIdentitiesList <a name="AclRoleServiceIdentitiesList" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRoleServiceIdentitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.get"></a>

```csharp
private AclRoleServiceIdentitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AclRoleServiceIdentitiesOutputReference <a name="AclRoleServiceIdentitiesOutputReference" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new AclRoleServiceIdentitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resetDatacenters">ResetDatacenters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatacenters` <a name="ResetDatacenters" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.resetDatacenters"></a>

```csharp
private void ResetDatacenters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacentersInput">DatacentersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacenters">Datacenters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatacentersInput`<sup>Optional</sup> <a name="DatacentersInput" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacentersInput"></a>

```csharp
public string[] DatacentersInput { get; }
```

- *Type:* string[]

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `Datacenters`<sup>Required</sup> <a name="Datacenters" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.datacenters"></a>

```csharp
public string[] Datacenters { get; }
```

- *Type:* string[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.aclRole.AclRoleServiceIdentitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



