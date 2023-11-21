# `data_consul_catalog_service`

Refer to the Terraform Registory for docs: [`data_consul_catalog_service`](https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service).

# `dataConsulCatalogService` Submodule <a name="`dataConsulCatalogService` Submodule" id="@cdktf/provider-consul.dataConsulCatalogService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulCatalogService <a name="DataConsulCatalogService" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service consul_catalog_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogService;

DataConsulCatalogService.Builder.create(Construct scope, java.lang.String id)
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
//  .queryOptions(java.util.List<DataConsulCatalogServiceQueryOptions>)
//  .tag(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.queryOptions">queryOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>></code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.queryOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#query_options DataConsulCatalogService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.Initializer.parameter.tag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions">putQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetQueryOptions">resetQueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putQueryOptions` <a name="putQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions"></a>

```java
public void putQueryOptions(IResolvable OR java.util.List<DataConsulCatalogServiceQueryOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.putQueryOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>>

---

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetId"></a>

```java
public void resetId()
```

##### `resetQueryOptions` <a name="resetQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetQueryOptions"></a>

```java
public void resetQueryOptions()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.resetTag"></a>

```java
public void resetTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulCatalogService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogService;

DataConsulCatalogService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogService;

DataConsulCatalogService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogService;

DataConsulCatalogService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogService;

DataConsulCatalogService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataConsulCatalogService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataConsulCatalogService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataConsulCatalogService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataConsulCatalogService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulCatalogService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptions">queryOptions</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList">DataConsulCatalogServiceQueryOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.service">service</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList">DataConsulCatalogServiceServiceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptionsInput">queryOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `queryOptions`<sup>Required</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptions"></a>

```java
public DataConsulCatalogServiceQueryOptionsList getQueryOptions();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList">DataConsulCatalogServiceQueryOptionsList</a>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.service"></a>

```java
public DataConsulCatalogServiceServiceList getService();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList">DataConsulCatalogServiceServiceList</a>

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryOptionsInput`<sup>Optional</sup> <a name="queryOptionsInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.queryOptionsInput"></a>

```java
public java.lang.Object getQueryOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulCatalogServiceConfig <a name="DataConsulCatalogServiceConfig" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogServiceConfig;

DataConsulCatalogServiceConfig.builder()
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
//  .queryOptions(java.util.List<DataConsulCatalogServiceQueryOptions>)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.queryOptions">queryOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>></code> | query_options block. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.tag">tag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#name DataConsulCatalogService#name}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#id DataConsulCatalogService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `queryOptions`<sup>Optional</sup> <a name="queryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.queryOptions"></a>

```java
public java.lang.Object getQueryOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>>

query_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#query_options DataConsulCatalogService#query_options}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceConfig.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}.

---

### DataConsulCatalogServiceQueryOptions <a name="DataConsulCatalogServiceQueryOptions" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogServiceQueryOptions;

DataConsulCatalogServiceQueryOptions.builder()
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
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.allowStale">allowStale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#allow_stale DataConsulCatalogService#allow_stale}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#namespace DataConsulCatalogService#namespace}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.near">near</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#near DataConsulCatalogService#near}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#node_meta DataConsulCatalogService#node_meta}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.partition">partition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#partition DataConsulCatalogService#partition}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.requireConsistent">requireConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#require_consistent DataConsulCatalogService#require_consistent}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#token DataConsulCatalogService#token}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitIndex">waitIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_index DataConsulCatalogService#wait_index}. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitTime">waitTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_time DataConsulCatalogService#wait_time}. |

---

##### `allowStale`<sup>Optional</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.allowStale"></a>

```java
public java.lang.Object getAllowStale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#allow_stale DataConsulCatalogService#allow_stale}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#namespace DataConsulCatalogService#namespace}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#near DataConsulCatalogService#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#node_meta DataConsulCatalogService#node_meta}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#partition DataConsulCatalogService#partition}.

---

##### `requireConsistent`<sup>Optional</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.requireConsistent"></a>

```java
public java.lang.Object getRequireConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#require_consistent DataConsulCatalogService#require_consistent}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#token DataConsulCatalogService#token}.

---

##### `waitIndex`<sup>Optional</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitIndex"></a>

```java
public java.lang.Number getWaitIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_index DataConsulCatalogService#wait_index}.

---

##### `waitTime`<sup>Optional</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions.property.waitTime"></a>

```java
public java.lang.String getWaitTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/catalog_service#wait_time DataConsulCatalogService#wait_time}.

---

### DataConsulCatalogServiceService <a name="DataConsulCatalogServiceService" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogServiceService;

DataConsulCatalogServiceService.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataConsulCatalogServiceQueryOptionsList <a name="DataConsulCatalogServiceQueryOptionsList" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogServiceQueryOptionsList;

new DataConsulCatalogServiceQueryOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get"></a>

```java
public DataConsulCatalogServiceQueryOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>>

---


### DataConsulCatalogServiceQueryOptionsOutputReference <a name="DataConsulCatalogServiceQueryOptionsOutputReference" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogServiceQueryOptionsOutputReference;

new DataConsulCatalogServiceQueryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetAllowStale">resetAllowStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetRequireConsistent">resetRequireConsistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitIndex">resetWaitIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitTime">resetWaitTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowStale` <a name="resetAllowStale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetAllowStale"></a>

```java
public void resetAllowStale()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNear"></a>

```java
public void resetNear()
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetNodeMeta"></a>

```java
public void resetNodeMeta()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetRequireConsistent` <a name="resetRequireConsistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetRequireConsistent"></a>

```java
public void resetRequireConsistent()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetWaitIndex` <a name="resetWaitIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitIndex"></a>

```java
public void resetWaitIndex()
```

##### `resetWaitTime` <a name="resetWaitTime" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.resetWaitTime"></a>

```java
public void resetWaitTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStaleInput">allowStaleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nearInput">nearInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMetaInput">nodeMetaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistentInput">requireConsistentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndexInput">waitIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTimeInput">waitTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStale">allowStale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.near">near</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistent">requireConsistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndex">waitIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTime">waitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowStaleInput`<sup>Optional</sup> <a name="allowStaleInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStaleInput"></a>

```java
public java.lang.Object getAllowStaleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nearInput"></a>

```java
public java.lang.String getNearInput();
```

- *Type:* java.lang.String

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMetaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `requireConsistentInput`<sup>Optional</sup> <a name="requireConsistentInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistentInput"></a>

```java
public java.lang.Object getRequireConsistentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `waitIndexInput`<sup>Optional</sup> <a name="waitIndexInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndexInput"></a>

```java
public java.lang.Number getWaitIndexInput();
```

- *Type:* java.lang.Number

---

##### `waitTimeInput`<sup>Optional</sup> <a name="waitTimeInput" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTimeInput"></a>

```java
public java.lang.String getWaitTimeInput();
```

- *Type:* java.lang.String

---

##### `allowStale`<sup>Required</sup> <a name="allowStale" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.allowStale"></a>

```java
public java.lang.Object getAllowStale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `requireConsistent`<sup>Required</sup> <a name="requireConsistent" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.requireConsistent"></a>

```java
public java.lang.Object getRequireConsistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `waitIndex`<sup>Required</sup> <a name="waitIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitIndex"></a>

```java
public java.lang.Number getWaitIndex();
```

- *Type:* java.lang.Number

---

##### `waitTime`<sup>Required</sup> <a name="waitTime" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.waitTime"></a>

```java
public java.lang.String getWaitTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceQueryOptions">DataConsulCatalogServiceQueryOptions</a>

---


### DataConsulCatalogServiceServiceList <a name="DataConsulCatalogServiceServiceList" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogServiceServiceList;

new DataConsulCatalogServiceServiceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get"></a>

```java
public DataConsulCatalogServiceServiceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataConsulCatalogServiceServiceOutputReference <a name="DataConsulCatalogServiceServiceOutputReference" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_catalog_service.DataConsulCatalogServiceServiceOutputReference;

new DataConsulCatalogServiceServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.createIndex">createIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.enableTagOverride">enableTagOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.meta">meta</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.modifyIndex">modifyIndex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeAddress">nodeAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeId">nodeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeMeta">nodeMeta</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.taggedAddresses">taggedAddresses</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService">DataConsulCatalogServiceService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `createIndex`<sup>Required</sup> <a name="createIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.createIndex"></a>

```java
public java.lang.String getCreateIndex();
```

- *Type:* java.lang.String

---

##### `enableTagOverride`<sup>Required</sup> <a name="enableTagOverride" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.enableTagOverride"></a>

```java
public java.lang.String getEnableTagOverride();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.meta"></a>

```java
public StringMap getMeta();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `modifyIndex`<sup>Required</sup> <a name="modifyIndex" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.modifyIndex"></a>

```java
public java.lang.String getModifyIndex();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeAddress`<sup>Required</sup> <a name="nodeAddress" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeAddress"></a>

```java
public java.lang.String getNodeAddress();
```

- *Type:* java.lang.String

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeId"></a>

```java
public java.lang.String getNodeId();
```

- *Type:* java.lang.String

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeMeta"></a>

```java
public StringMap getNodeMeta();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `taggedAddresses`<sup>Required</sup> <a name="taggedAddresses" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.taggedAddresses"></a>

```java
public StringMap getTaggedAddresses();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceServiceOutputReference.property.internalValue"></a>

```java
public DataConsulCatalogServiceService getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.dataConsulCatalogService.DataConsulCatalogServiceService">DataConsulCatalogServiceService</a>

---



