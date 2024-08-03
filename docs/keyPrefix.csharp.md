# `keyPrefix` Submodule <a name="`keyPrefix` Submodule" id="@cdktf/provider-consul.keyPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyPrefix <a name="KeyPrefix" id="@cdktf/provider-consul.keyPrefix.KeyPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix consul_key_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new KeyPrefix(Construct Scope, string Id, KeyPrefixConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig">KeyPrefixConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig">KeyPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.putSubkey">PutSubkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetDatacenter">ResetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetSubkey">ResetSubkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetSubkeys">ResetSubkeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubkey` <a name="PutSubkey" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.putSubkey"></a>

```csharp
private void PutSubkey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.putSubkey.parameter.value"></a>

- *Type:* object

---

##### `ResetDatacenter` <a name="ResetDatacenter" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetDatacenter"></a>

```csharp
private void ResetDatacenter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetSubkey` <a name="ResetSubkey" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetSubkey"></a>

```csharp
private void ResetSubkey()
```

##### `ResetSubkeys` <a name="ResetSubkeys" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetSubkeys"></a>

```csharp
private void ResetSubkeys()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyPrefix resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

KeyPrefix.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

KeyPrefix.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

KeyPrefix.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

KeyPrefix.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KeyPrefix resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyPrefix to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KeyPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkey">Subkey</a></code> | <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList">KeyPrefixSubkeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.datacenterInput">DatacenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.partitionInput">PartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.pathPrefixInput">PathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkeyInput">SubkeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkeysInput">SubkeysInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.datacenter">Datacenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkeys">Subkeys</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Subkey`<sup>Required</sup> <a name="Subkey" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkey"></a>

```csharp
public KeyPrefixSubkeyList Subkey { get; }
```

- *Type:* <a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList">KeyPrefixSubkeyList</a>

---

##### `DatacenterInput`<sup>Optional</sup> <a name="DatacenterInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.datacenterInput"></a>

```csharp
public string DatacenterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.partitionInput"></a>

```csharp
public string PartitionInput { get; }
```

- *Type:* string

---

##### `PathPrefixInput`<sup>Optional</sup> <a name="PathPrefixInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.pathPrefixInput"></a>

```csharp
public string PathPrefixInput { get; }
```

- *Type:* string

---

##### `SubkeyInput`<sup>Optional</sup> <a name="SubkeyInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkeyInput"></a>

```csharp
public object SubkeyInput { get; }
```

- *Type:* object

---

##### `SubkeysInput`<sup>Optional</sup> <a name="SubkeysInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkeysInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SubkeysInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Datacenter`<sup>Required</sup> <a name="Datacenter" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.datacenter"></a>

```csharp
public string Datacenter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; }
```

- *Type:* string

---

##### `Subkeys`<sup>Required</sup> <a name="Subkeys" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.subkeys"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Subkeys { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefix.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-consul.keyPrefix.KeyPrefix.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyPrefixConfig <a name="KeyPrefixConfig" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new KeyPrefixConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PathPrefix,
    string Datacenter = null,
    string Id = null,
    string Namespace = null,
    string Partition = null,
    object Subkey = null,
    System.Collections.Generic.IDictionary<string, string> Subkeys = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.pathPrefix">PathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#path_prefix KeyPrefix#path_prefix}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.datacenter">Datacenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#datacenter KeyPrefix#datacenter}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#id KeyPrefix#id}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#namespace KeyPrefix#namespace}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.partition">Partition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#partition KeyPrefix#partition}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.subkey">Subkey</a></code> | <code>object</code> | subkey block. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.subkeys">Subkeys</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#subkeys KeyPrefix#subkeys}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#token KeyPrefix#token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PathPrefix`<sup>Required</sup> <a name="PathPrefix" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.pathPrefix"></a>

```csharp
public string PathPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#path_prefix KeyPrefix#path_prefix}.

---

##### `Datacenter`<sup>Optional</sup> <a name="Datacenter" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.datacenter"></a>

```csharp
public string Datacenter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#datacenter KeyPrefix#datacenter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#id KeyPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#namespace KeyPrefix#namespace}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.partition"></a>

```csharp
public string Partition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#partition KeyPrefix#partition}.

---

##### `Subkey`<sup>Optional</sup> <a name="Subkey" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.subkey"></a>

```csharp
public object Subkey { get; set; }
```

- *Type:* object

subkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#subkey KeyPrefix#subkey}

---

##### `Subkeys`<sup>Optional</sup> <a name="Subkeys" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.subkeys"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Subkeys { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#subkeys KeyPrefix#subkeys}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-consul.keyPrefix.KeyPrefixConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#token KeyPrefix#token}.

---

### KeyPrefixSubkey <a name="KeyPrefixSubkey" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new KeyPrefixSubkey {
    string Path,
    string Value,
    double Flags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#path KeyPrefix#path}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#value KeyPrefix#value}. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey.property.flags">Flags</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#flags KeyPrefix#flags}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#path KeyPrefix#path}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#value KeyPrefix#value}.

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkey.property.flags"></a>

```csharp
public double Flags { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/resources/key_prefix#flags KeyPrefix#flags}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyPrefixSubkeyList <a name="KeyPrefixSubkeyList" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new KeyPrefixSubkeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.get"></a>

```csharp
private KeyPrefixSubkeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyPrefixSubkeyOutputReference <a name="KeyPrefixSubkeyOutputReference" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Consul;

new KeyPrefixSubkeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.resetFlags"></a>

```csharp
private void ResetFlags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.flagsInput">FlagsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.flags">Flags</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.flagsInput"></a>

```csharp
public double FlagsInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.flags"></a>

```csharp
public double Flags { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-consul.keyPrefix.KeyPrefixSubkeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



