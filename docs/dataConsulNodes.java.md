# `dataConsulNodes` Submodule <a name="`dataConsulNodes` Submodule" id="@cdktf/provider-consul.dataConsulNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulNodes <a name="DataConsulNodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes consul_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodes;

DataConsulNodes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .queryOptions(IResolvable)
//  .queryOptions(java.util.List<DataConsulNodesQueryOptions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#id DataConsulNodes#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.queryOptions">queryOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>></code> | query_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#id DataConsulNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.Initializer.parameter.queryOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#query_options DataConsulNodes#query_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions">putQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetQueryOptions">resetQueryOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putQueryOptions` <a name="putQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions"></a>

```java
public void putQueryOptions(IResolvable OR java.util.List<DataConsulNodesQueryOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.putQueryOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetId"></a>

```java
public void resetId()
```

##### `resetQueryOptions` <a name="resetQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.resetQueryOptions"></a>

```java
public void resetQueryOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulNodes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodes;

DataConsulNodes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodes;

DataConsulNodes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodes;

DataConsulNodes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodes;

DataConsulNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataConsulNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataConsulNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataConsulNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataConsulNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeIds">nodeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeNames">nodeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodes">nodes</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList">DataConsulNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptions">queryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList">DataConsulNodesQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptionsInput">queryOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `nodeIds`<sup>Required</sup> <a name="nodeIds" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeIds"></a>

```java
public java.util.List<java.lang.String> getNodeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodeNames`<sup>Required</sup> <a name="nodeNames" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodeNames"></a>

```java
public java.util.List<java.lang.String> getNodeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.nodes"></a>

```java
public DataConsulNodesNodesList getNodes();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList">DataConsulNodesNodesList</a>

---

##### `queryOptions`<sup>Required</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptions"></a>

```java
public DataConsulNodesQueryOptionsList getQueryOptions();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList">DataConsulNodesQueryOptionsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `queryOptionsInput`<sup>Optional</sup> <a name="queryOptionsInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.queryOptionsInput"></a>

```java
public java.lang.Object getQueryOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulNodesConfig <a name="DataConsulNodesConfig" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodesConfig;

DataConsulNodesConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .queryOptions(IResolvable)
//  .queryOptions(java.util.List<DataConsulNodesQueryOptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#id DataConsulNodes#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.queryOptions">queryOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>></code> | query_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#id DataConsulNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesConfig.property.queryOptions"></a>

```java
public java.lang.Object getQueryOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#query_options DataConsulNodes#query_options}

---

### DataConsulNodesNodes <a name="DataConsulNodesNodes" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodesNodes;

DataConsulNodesNodes.builder()
    .build();
```


### DataConsulNodesQueryOptions <a name="DataConsulNodesQueryOptions" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodesQueryOptions;

DataConsulNodesQueryOptions.builder()
//  .allowStale(java.lang.Boolean)
//  .allowStale(IResolvable)
//  .datacenter(java.lang.String)
//  .near(java.lang.String)
//  .nodeMeta(java.util.Map<java.lang.String, java.lang.String>)
//  .partition(java.lang.String)
//  .requireConsistent(java.lang.Boolean)
//  .requireConsistent(IResolvable)
//  .token(java.lang.String)
//  .waitIndex(java.lang.Number)
//  .waitTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.allowStale">allowStale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#allow_stale DataConsulNodes#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#datacenter DataConsulNodes#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.near">near</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#near DataConsulNodes#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#node_meta DataConsulNodes#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.partition">partition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#partition DataConsulNodes#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.requireConsistent">requireConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#require_consistent DataConsulNodes#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#token DataConsulNodes#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitIndex">waitIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#wait_index DataConsulNodes#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitTime">waitTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#wait_time DataConsulNodes#wait_time}. |

---

##### `allowStale`<sup>Optional</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.allowStale"></a>

```java
public java.lang.Object getAllowStale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#allow_stale DataConsulNodes#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#datacenter DataConsulNodes#datacenter}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#near DataConsulNodes#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#node_meta DataConsulNodes#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#partition DataConsulNodes#partition}.

---

##### `requireConsistent`<sup>Optional</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.requireConsistent"></a>

```java
public java.lang.Object getRequireConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#require_consistent DataConsulNodes#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#token DataConsulNodes#token}.

---

##### `waitIndex`<sup>Optional</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitIndex"></a>

```java
public java.lang.Number getWaitIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#wait_index DataConsulNodes#wait_index}.

---

##### `waitTime`<sup>Optional</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions.property.waitTime"></a>

```java
public java.lang.String getWaitTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/nodes#wait_time DataConsulNodes#wait_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulNodesNodesList <a name="DataConsulNodesNodesList" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodesNodesList;

new DataConsulNodesNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get"></a>

```java
public DataConsulNodesNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataConsulNodesNodesOutputReference <a name="DataConsulNodesNodesOutputReference" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodesNodesOutputReference;

new DataConsulNodesNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.meta">meta</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.taggedAddresses">taggedAddresses</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes">DataConsulNodesNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.meta"></a>

```java
public StringMap getMeta();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `taggedAddresses`<sup>Required</sup> <a name="taggedAddresses" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.taggedAddresses"></a>

```java
public StringMap getTaggedAddresses();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodesOutputReference.property.internalValue"></a>

```java
public DataConsulNodesNodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesNodes">DataConsulNodesNodes</a>

---


### DataConsulNodesQueryOptionsList <a name="DataConsulNodesQueryOptionsList" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodesQueryOptionsList;

new DataConsulNodesQueryOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get"></a>

```java
public DataConsulNodesQueryOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>>

---


### DataConsulNodesQueryOptionsOutputReference <a name="DataConsulNodesQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_nodes.DataConsulNodesQueryOptionsOutputReference;

new DataConsulNodesQueryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetAllowStale">resetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetRequireConsistent">resetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitIndex">resetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitTime">resetWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowStale` <a name="resetAllowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetAllowStale"></a>

```java
public void resetAllowStale()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNear"></a>

```java
public void resetNear()
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetNodeMeta"></a>

```java
public void resetNodeMeta()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetRequireConsistent` <a name="resetRequireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetRequireConsistent"></a>

```java
public void resetRequireConsistent()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetWaitIndex` <a name="resetWaitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitIndex"></a>

```java
public void resetWaitIndex()
```

##### `resetWaitTime` <a name="resetWaitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.resetWaitTime"></a>

```java
public void resetWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStaleInput">allowStaleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nearInput">nearInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMetaInput">nodeMetaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistentInput">requireConsistentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndexInput">waitIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTimeInput">waitTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStale">allowStale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.near">near</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistent">requireConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndex">waitIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTime">waitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowStaleInput`<sup>Optional</sup> <a name="allowStaleInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStaleInput"></a>

```java
public java.lang.Object getAllowStaleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nearInput"></a>

```java
public java.lang.String getNearInput();
```

- *Type:* java.lang.String

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMetaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `requireConsistentInput`<sup>Optional</sup> <a name="requireConsistentInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistentInput"></a>

```java
public java.lang.Object getRequireConsistentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `waitIndexInput`<sup>Optional</sup> <a name="waitIndexInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndexInput"></a>

```java
public java.lang.Number getWaitIndexInput();
```

- *Type:* java.lang.Number

---

##### `waitTimeInput`<sup>Optional</sup> <a name="waitTimeInput" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTimeInput"></a>

```java
public java.lang.String getWaitTimeInput();
```

- *Type:* java.lang.String

---

##### `allowStale`<sup>Required</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.allowStale"></a>

```java
public java.lang.Object getAllowStale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `requireConsistent`<sup>Required</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.requireConsistent"></a>

```java
public java.lang.Object getRequireConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `waitIndex`<sup>Required</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitIndex"></a>

```java
public java.lang.Number getWaitIndex();
```

- *Type:* java.lang.Number

---

##### `waitTime`<sup>Required</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.waitTime"></a>

```java
public java.lang.String getWaitTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.dataConsulNodes.DataConsulNodesQueryOptions">DataConsulNodesQueryOptions</a>

---



