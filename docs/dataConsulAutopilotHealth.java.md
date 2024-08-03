# `dataConsulAutopilotHealth` Submodule <a name="`dataConsulAutopilotHealth` Submodule" id="@cdktf/provider-consul.dataConsulAutopilotHealth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAutopilotHealth <a name="DataConsulAutopilotHealth" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health consul_autopilot_health}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealth;

DataConsulAutopilotHealth.Builder.create(Construct scope, java.lang.String id)
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
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#datacenter DataConsulAutopilotHealth#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#id DataConsulAutopilotHealth#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#datacenter DataConsulAutopilotHealth#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#id DataConsulAutopilotHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulAutopilotHealth resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealth;

DataConsulAutopilotHealth.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealth;

DataConsulAutopilotHealth.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealth;

DataConsulAutopilotHealth.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealth;

DataConsulAutopilotHealth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataConsulAutopilotHealth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataConsulAutopilotHealth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataConsulAutopilotHealth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataConsulAutopilotHealth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulAutopilotHealth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.failureTolerance">failureTolerance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.healthy">healthy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList">DataConsulAutopilotHealthServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `failureTolerance`<sup>Required</sup> <a name="failureTolerance" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.failureTolerance"></a>

```java
public java.lang.Number getFailureTolerance();
```

- *Type:* java.lang.Number

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.healthy"></a>

```java
public IResolvable getHealthy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.servers"></a>

```java
public DataConsulAutopilotHealthServersList getServers();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList">DataConsulAutopilotHealthServersList</a>

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealth.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAutopilotHealthConfig <a name="DataConsulAutopilotHealthConfig" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealthConfig;

DataConsulAutopilotHealthConfig.builder()
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
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#datacenter DataConsulAutopilotHealth#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#id DataConsulAutopilotHealth#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#datacenter DataConsulAutopilotHealth#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/autopilot_health#id DataConsulAutopilotHealth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataConsulAutopilotHealthServers <a name="DataConsulAutopilotHealthServers" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealthServers;

DataConsulAutopilotHealthServers.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulAutopilotHealthServersList <a name="DataConsulAutopilotHealthServersList" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealthServersList;

new DataConsulAutopilotHealthServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.get"></a>

```java
public DataConsulAutopilotHealthServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataConsulAutopilotHealthServersOutputReference <a name="DataConsulAutopilotHealthServersOutputReference" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_autopilot_health.DataConsulAutopilotHealthServersOutputReference;

new DataConsulAutopilotHealthServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.healthy">healthy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.lastContact">lastContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.lastIndex">lastIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.lastTerm">lastTerm</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.leader">leader</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.serfStatus">serfStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.stableSince">stableSince</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.voter">voter</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServers">DataConsulAutopilotHealthServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.healthy"></a>

```java
public IResolvable getHealthy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastContact`<sup>Required</sup> <a name="lastContact" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.lastContact"></a>

```java
public java.lang.String getLastContact();
```

- *Type:* java.lang.String

---

##### `lastIndex`<sup>Required</sup> <a name="lastIndex" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.lastIndex"></a>

```java
public java.lang.Number getLastIndex();
```

- *Type:* java.lang.Number

---

##### `lastTerm`<sup>Required</sup> <a name="lastTerm" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.lastTerm"></a>

```java
public java.lang.Number getLastTerm();
```

- *Type:* java.lang.Number

---

##### `leader`<sup>Required</sup> <a name="leader" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.leader"></a>

```java
public IResolvable getLeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serfStatus`<sup>Required</sup> <a name="serfStatus" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.serfStatus"></a>

```java
public java.lang.String getSerfStatus();
```

- *Type:* java.lang.String

---

##### `stableSince`<sup>Required</sup> <a name="stableSince" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.stableSince"></a>

```java
public java.lang.String getStableSince();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `voter`<sup>Required</sup> <a name="voter" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.voter"></a>

```java
public IResolvable getVoter();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServersOutputReference.property.internalValue"></a>

```java
public DataConsulAutopilotHealthServers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulAutopilotHealth.DataConsulAutopilotHealthServers">DataConsulAutopilotHealthServers</a>

---



