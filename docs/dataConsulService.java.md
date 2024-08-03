# `dataConsulService` Submodule <a name="`dataConsulService` Submodule" id="@cdktf/provider-consul.dataConsulService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulService <a name="DataConsulService" id="@cdktf/provider-consul.dataConsulService.DataConsulService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service consul_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulService;

DataConsulService.Builder.create(Construct scope, java.lang.String id)
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
//  .datacenter(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .queryOptions(IResolvable)
//  .queryOptions(java.util.List<DataConsulServiceQueryOptions>)
//  .tag(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#name DataConsulService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#datacenter DataConsulService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#filter DataConsulService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#id DataConsulService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.queryOptions">queryOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>></code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#tag DataConsulService#tag}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#name DataConsulService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#datacenter DataConsulService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#filter DataConsulService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#id DataConsulService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.queryOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#query_options DataConsulService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulService.DataConsulService.Initializer.parameter.tag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#tag DataConsulService#tag}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.putQueryOptions">putQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetQueryOptions">resetQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulService.DataConsulService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulService.DataConsulService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulService.DataConsulService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulService.DataConsulService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.dataConsulService.DataConsulService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulService.DataConsulService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulService.DataConsulService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putQueryOptions` <a name="putQueryOptions" id="@cdktf/provider-consul.dataConsulService.DataConsulService.putQueryOptions"></a>

```java
public void putQueryOptions(IResolvable OR java.util.List<DataConsulServiceQueryOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulService.DataConsulService.putQueryOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>>

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetId"></a>

```java
public void resetId()
```

##### `resetQueryOptions` <a name="resetQueryOptions" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetQueryOptions"></a>

```java
public void resetQueryOptions()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-consul.dataConsulService.DataConsulService.resetTag"></a>

```java
public void resetTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulService;

DataConsulService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulService;

DataConsulService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulService;

DataConsulService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulService.DataConsulService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulService;

DataConsulService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataConsulService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataConsulService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataConsulService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataConsulService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptions">queryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList">DataConsulServiceQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.service">service</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList">DataConsulServiceServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptionsInput">queryOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `queryOptions`<sup>Required</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptions"></a>

```java
public DataConsulServiceQueryOptionsList getQueryOptions();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList">DataConsulServiceQueryOptionsList</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.service"></a>

```java
public DataConsulServiceServiceList getService();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList">DataConsulServiceServiceList</a>

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryOptionsInput`<sup>Optional</sup> <a name="queryOptionsInput" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.queryOptionsInput"></a>

```java
public java.lang.Object getQueryOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulService.DataConsulService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulServiceConfig <a name="DataConsulServiceConfig" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulServiceConfig;

DataConsulServiceConfig.builder()
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
//  .datacenter(java.lang.String)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .queryOptions(IResolvable)
//  .queryOptions(java.util.List<DataConsulServiceQueryOptions>)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#name DataConsulService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#datacenter DataConsulService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#filter DataConsulService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#id DataConsulService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.queryOptions">queryOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>></code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#tag DataConsulService#tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#name DataConsulService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#datacenter DataConsulService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#filter DataConsulService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#id DataConsulService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.queryOptions"></a>

```java
public java.lang.Object getQueryOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#query_options DataConsulService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceConfig.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#tag DataConsulService#tag}.

---

### DataConsulServiceQueryOptions <a name="DataConsulServiceQueryOptions" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulServiceQueryOptions;

DataConsulServiceQueryOptions.builder()
//  .allowStale(java.lang.Boolean)
//  .allowStale(IResolvable)
//  .datacenter(java.lang.String)
//  .namespace(java.lang.String)
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
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.allowStale">allowStale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#allow_stale DataConsulService#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#datacenter DataConsulService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#namespace DataConsulService#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.near">near</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#near DataConsulService#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#node_meta DataConsulService#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.partition">partition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#partition DataConsulService#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.requireConsistent">requireConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#require_consistent DataConsulService#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#token DataConsulService#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitIndex">waitIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#wait_index DataConsulService#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitTime">waitTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#wait_time DataConsulService#wait_time}. |

---

##### `allowStale`<sup>Optional</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.allowStale"></a>

```java
public java.lang.Object getAllowStale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#allow_stale DataConsulService#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#datacenter DataConsulService#datacenter}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#namespace DataConsulService#namespace}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#near DataConsulService#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#node_meta DataConsulService#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#partition DataConsulService#partition}.

---

##### `requireConsistent`<sup>Optional</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.requireConsistent"></a>

```java
public java.lang.Object getRequireConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#require_consistent DataConsulService#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#token DataConsulService#token}.

---

##### `waitIndex`<sup>Optional</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitIndex"></a>

```java
public java.lang.Number getWaitIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#wait_index DataConsulService#wait_index}.

---

##### `waitTime`<sup>Optional</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions.property.waitTime"></a>

```java
public java.lang.String getWaitTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.21.0/docs/data-sources/service#wait_time DataConsulService#wait_time}.

---

### DataConsulServiceService <a name="DataConsulServiceService" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulServiceService;

DataConsulServiceService.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulServiceQueryOptionsList <a name="DataConsulServiceQueryOptionsList" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulServiceQueryOptionsList;

new DataConsulServiceQueryOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.get"></a>

```java
public DataConsulServiceQueryOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>>

---


### DataConsulServiceQueryOptionsOutputReference <a name="DataConsulServiceQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulServiceQueryOptionsOutputReference;

new DataConsulServiceQueryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetAllowStale">resetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetRequireConsistent">resetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitIndex">resetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitTime">resetWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowStale` <a name="resetAllowStale" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetAllowStale"></a>

```java
public void resetAllowStale()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNear"></a>

```java
public void resetNear()
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetNodeMeta"></a>

```java
public void resetNodeMeta()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetRequireConsistent` <a name="resetRequireConsistent" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetRequireConsistent"></a>

```java
public void resetRequireConsistent()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetWaitIndex` <a name="resetWaitIndex" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitIndex"></a>

```java
public void resetWaitIndex()
```

##### `resetWaitTime` <a name="resetWaitTime" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.resetWaitTime"></a>

```java
public void resetWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStaleInput">allowStaleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nearInput">nearInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMetaInput">nodeMetaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistentInput">requireConsistentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndexInput">waitIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTimeInput">waitTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStale">allowStale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.near">near</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistent">requireConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndex">waitIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTime">waitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowStaleInput`<sup>Optional</sup> <a name="allowStaleInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStaleInput"></a>

```java
public java.lang.Object getAllowStaleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nearInput"></a>

```java
public java.lang.String getNearInput();
```

- *Type:* java.lang.String

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMetaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `requireConsistentInput`<sup>Optional</sup> <a name="requireConsistentInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistentInput"></a>

```java
public java.lang.Object getRequireConsistentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `waitIndexInput`<sup>Optional</sup> <a name="waitIndexInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndexInput"></a>

```java
public java.lang.Number getWaitIndexInput();
```

- *Type:* java.lang.Number

---

##### `waitTimeInput`<sup>Optional</sup> <a name="waitTimeInput" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTimeInput"></a>

```java
public java.lang.String getWaitTimeInput();
```

- *Type:* java.lang.String

---

##### `allowStale`<sup>Required</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.allowStale"></a>

```java
public java.lang.Object getAllowStale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `requireConsistent`<sup>Required</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.requireConsistent"></a>

```java
public java.lang.Object getRequireConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `waitIndex`<sup>Required</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitIndex"></a>

```java
public java.lang.Number getWaitIndex();
```

- *Type:* java.lang.Number

---

##### `waitTime`<sup>Required</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.waitTime"></a>

```java
public java.lang.String getWaitTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceQueryOptions">DataConsulServiceQueryOptions</a>

---


### DataConsulServiceServiceList <a name="DataConsulServiceServiceList" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulServiceServiceList;

new DataConsulServiceServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.get"></a>

```java
public DataConsulServiceServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataConsulServiceServiceOutputReference <a name="DataConsulServiceServiceOutputReference" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_service.DataConsulServiceServiceOutputReference;

new DataConsulServiceServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.createIndex">createIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.enableTagOverride">enableTagOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.meta">meta</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.modifyIndex">modifyIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeAddress">nodeAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeMeta">nodeMeta</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.taggedAddresses">taggedAddresses</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceService">DataConsulServiceService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `createIndex`<sup>Required</sup> <a name="createIndex" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.createIndex"></a>

```java
public java.lang.String getCreateIndex();
```

- *Type:* java.lang.String

---

##### `enableTagOverride`<sup>Required</sup> <a name="enableTagOverride" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.enableTagOverride"></a>

```java
public java.lang.String getEnableTagOverride();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.meta"></a>

```java
public StringMap getMeta();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `modifyIndex`<sup>Required</sup> <a name="modifyIndex" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.modifyIndex"></a>

```java
public java.lang.String getModifyIndex();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeAddress`<sup>Required</sup> <a name="nodeAddress" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeAddress"></a>

```java
public java.lang.String getNodeAddress();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeMeta"></a>

```java
public StringMap getNodeMeta();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `taggedAddresses`<sup>Required</sup> <a name="taggedAddresses" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.taggedAddresses"></a>

```java
public StringMap getTaggedAddresses();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulService.DataConsulServiceServiceOutputReference.property.internalValue"></a>

```java
public DataConsulServiceService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulService.DataConsulServiceService">DataConsulServiceService</a>

---



