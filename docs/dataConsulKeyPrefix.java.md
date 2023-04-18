# `data_consul_key_prefix`

Refer to the Terraform Registory for docs: [`data_consul_key_prefix`](https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix).

# `dataConsulKeyPrefix` Submodule <a name="`dataConsulKeyPrefix` Submodule" id="@cdktf/provider-consul.dataConsulKeyPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulKeyPrefix <a name="DataConsulKeyPrefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix consul_key_prefix}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefix;

DataConsulKeyPrefix.Builder.create(Construct scope, java.lang.String id)
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
    .pathPrefix(java.lang.String)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .subkey(IResolvable)
//  .subkey(java.util.List<DataConsulKeyPrefixSubkey>)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.subkey">subkey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>></code> | subkey block. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.pathPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}.

---

##### `subkey`<sup>Optional</sup> <a name="subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.subkey"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>>

subkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#subkey DataConsulKeyPrefix#subkey}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.putSubkey">putSubkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetSubkey">resetSubkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSubkey` <a name="putSubkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.putSubkey"></a>

```java
public void putSubkey(IResolvable OR java.util.List<DataConsulKeyPrefixSubkey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.putSubkey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>>

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetSubkey` <a name="resetSubkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetSubkey"></a>

```java
public void resetSubkey()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefix;

DataConsulKeyPrefix.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefix;

DataConsulKeyPrefix.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefix;

DataConsulKeyPrefix.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkey">subkey</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList">DataConsulKeyPrefixSubkeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeys">subkeys</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.var">var</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefixInput">pathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeyInput">subkeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `subkey`<sup>Required</sup> <a name="subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkey"></a>

```java
public DataConsulKeyPrefixSubkeyList getSubkey();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList">DataConsulKeyPrefixSubkeyList</a>

---

##### `subkeys`<sup>Required</sup> <a name="subkeys" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeys"></a>

```java
public StringMap getSubkeys();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `var`<sup>Required</sup> <a name="var" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.var"></a>

```java
public StringMap getVar();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefixInput"></a>

```java
public java.lang.String getPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `subkeyInput`<sup>Optional</sup> <a name="subkeyInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.subkeyInput"></a>

```java
public java.lang.Object getSubkeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefix.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulKeyPrefixConfig <a name="DataConsulKeyPrefixConfig" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefixConfig;

DataConsulKeyPrefixConfig.builder()
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
    .pathPrefix(java.lang.String)
//  .datacenter(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .subkey(IResolvable)
//  .subkey(java.util.List<DataConsulKeyPrefixSubkey>)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.subkey">subkey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>></code> | subkey block. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#path_prefix DataConsulKeyPrefix#path_prefix}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#datacenter DataConsulKeyPrefix#datacenter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#id DataConsulKeyPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#namespace DataConsulKeyPrefix#namespace}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#partition DataConsulKeyPrefix#partition}.

---

##### `subkey`<sup>Optional</sup> <a name="subkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.subkey"></a>

```java
public java.lang.Object getSubkey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>>

subkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#subkey DataConsulKeyPrefix#subkey}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#token DataConsulKeyPrefix#token}.

---

### DataConsulKeyPrefixSubkey <a name="DataConsulKeyPrefixSubkey" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefixSubkey;

DataConsulKeyPrefixSubkey.builder()
    .name(java.lang.String)
    .path(java.lang.String)
//  .default(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#name DataConsulKeyPrefix#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#path DataConsulKeyPrefix#path}. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#default DataConsulKeyPrefix#default}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#name DataConsulKeyPrefix#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#path DataConsulKeyPrefix#path}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.17.0/docs/data-sources/key_prefix#default DataConsulKeyPrefix#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataConsulKeyPrefixSubkeyList <a name="DataConsulKeyPrefixSubkeyList" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefixSubkeyList;

new DataConsulKeyPrefixSubkeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.get"></a>

```java
public DataConsulKeyPrefixSubkeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a>>

---


### DataConsulKeyPrefixSubkeyOutputReference <a name="DataConsulKeyPrefixSubkeyOutputReference" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_key_prefix.DataConsulKeyPrefixSubkeyOutputReference;

new DataConsulKeyPrefixSubkeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resetDefault">resetDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.resetDefault"></a>

```java
public void resetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulKeyPrefix.DataConsulKeyPrefixSubkey">DataConsulKeyPrefixSubkey</a> OR com.hashicorp.cdktf.IResolvable

---



