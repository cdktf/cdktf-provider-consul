# `dataConsulAclPolicy` Submodule <a name="`dataConsulAclPolicy` Submodule" id="@cdktf/provider-consul.dataConsulAclPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulAclPolicy <a name="DataConsulAclPolicy" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy consul_acl_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_acl_policy.DataConsulAclPolicy;

DataConsulAclPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#name DataConsulAclPolicy#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#id DataConsulAclPolicy#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#namespace DataConsulAclPolicy#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#partition DataConsulAclPolicy#partition}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#name DataConsulAclPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#id DataConsulAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#namespace DataConsulAclPolicy#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#partition DataConsulAclPolicy#partition}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetPartition">resetPartition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.resetPartition"></a>

```java
public void resetPartition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulAclPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_acl_policy.DataConsulAclPolicy;

DataConsulAclPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_acl_policy.DataConsulAclPolicy;

DataConsulAclPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_acl_policy.DataConsulAclPolicy;

DataConsulAclPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_acl_policy.DataConsulAclPolicy;

DataConsulAclPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataConsulAclPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataConsulAclPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataConsulAclPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataConsulAclPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulAclPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.rules">rules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.rules"></a>

```java
public java.lang.String getRules();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulAclPolicyConfig <a name="DataConsulAclPolicyConfig" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_acl_policy.DataConsulAclPolicyConfig;

DataConsulAclPolicyConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#name DataConsulAclPolicy#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#id DataConsulAclPolicy#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#namespace DataConsulAclPolicy#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#partition DataConsulAclPolicy#partition}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#name DataConsulAclPolicy#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#id DataConsulAclPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#namespace DataConsulAclPolicy#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulAclPolicy.DataConsulAclPolicyConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/acl_policy#partition DataConsulAclPolicy#partition}.

---



