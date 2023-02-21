# `preparedQuery` Submodule <a name="`preparedQuery` Submodule" id="@cdktf/provider-consul.preparedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PreparedQuery <a name="PreparedQuery" id="@cdktf/provider-consul.preparedQuery.PreparedQuery"></a>

Represents a {@link https://www.terraform.io/docs/providers/consul/r/prepared_query consul_prepared_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQuery;

PreparedQuery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .service(java.lang.String)
//  .connect(java.lang.Boolean)
//  .connect(IResolvable)
//  .datacenter(java.lang.String)
//  .dns(PreparedQueryDns)
//  .failover(PreparedQueryFailover)
//  .id(java.lang.String)
//  .ignoreCheckIds(java.util.List<java.lang.String>)
//  .near(java.lang.String)
//  .nodeMeta(java.util.Map<java.lang.String, java.lang.String>)
//  .onlyPassing(java.lang.Boolean)
//  .onlyPassing(IResolvable)
//  .serviceMeta(java.util.Map<java.lang.String, java.lang.String>)
//  .session(java.lang.String)
//  .storedToken(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .template(PreparedQueryTemplate)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connect">connect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.ignoreCheckIds">ignoreCheckIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.near">near</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.onlyPassing">onlyPassing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.serviceMeta">serviceMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.session">session</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.storedToken">storedToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}.

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.connect"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.datacenter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.dns"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

dns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#dns PreparedQuery#dns}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.failover"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#failover PreparedQuery#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreCheckIds`<sup>Optional</sup> <a name="ignoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.ignoreCheckIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.near"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.nodeMeta"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}.

---

##### `onlyPassing`<sup>Optional</sup> <a name="onlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.onlyPassing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}.

---

##### `serviceMeta`<sup>Optional</sup> <a name="serviceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.serviceMeta"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}.

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.session"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}.

---

##### `storedToken`<sup>Optional</sup> <a name="storedToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.storedToken"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#template PreparedQuery#template}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns">putDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover">putFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect">resetConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds">resetIgnoreCheckIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear">resetNear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta">resetNodeMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing">resetOnlyPassing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta">resetServiceMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession">resetSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken">resetStoredToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDns` <a name="putDns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns"></a>

```java
public void putDns(PreparedQueryDns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---

##### `putFailover` <a name="putFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover"></a>

```java
public void putFailover(PreparedQueryFailover value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putFailover.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate"></a>

```java
public void putTemplate(PreparedQueryTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---

##### `resetConnect` <a name="resetConnect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetConnect"></a>

```java
public void resetConnect()
```

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetDns` <a name="resetDns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetDns"></a>

```java
public void resetDns()
```

##### `resetFailover` <a name="resetFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetFailover"></a>

```java
public void resetFailover()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreCheckIds` <a name="resetIgnoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetIgnoreCheckIds"></a>

```java
public void resetIgnoreCheckIds()
```

##### `resetNear` <a name="resetNear" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNear"></a>

```java
public void resetNear()
```

##### `resetNodeMeta` <a name="resetNodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetNodeMeta"></a>

```java
public void resetNodeMeta()
```

##### `resetOnlyPassing` <a name="resetOnlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetOnlyPassing"></a>

```java
public void resetOnlyPassing()
```

##### `resetServiceMeta` <a name="resetServiceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetServiceMeta"></a>

```java
public void resetServiceMeta()
```

##### `resetSession` <a name="resetSession" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetSession"></a>

```java
public void resetSession()
```

##### `resetStoredToken` <a name="resetStoredToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetStoredToken"></a>

```java
public void resetStoredToken()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetTemplate"></a>

```java
public void resetTemplate()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQuery;

PreparedQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQuery;

PreparedQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQuery;

PreparedQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput">connectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput">dnsInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput">failoverInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput">ignoreCheckIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput">nearInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput">nodeMetaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput">onlyPassingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput">serviceMetaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput">sessionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput">storedTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect">connect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds">ignoreCheckIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near">near</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing">onlyPassing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta">serviceMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session">session</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken">storedToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dns"></a>

```java
public PreparedQueryDnsOutputReference getDns();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference">PreparedQueryDnsOutputReference</a>

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failover"></a>

```java
public PreparedQueryFailoverOutputReference getFailover();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference">PreparedQueryFailoverOutputReference</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.template"></a>

```java
public PreparedQueryTemplateOutputReference getTemplate();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference">PreparedQueryTemplateOutputReference</a>

---

##### `connectInput`<sup>Optional</sup> <a name="connectInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connectInput"></a>

```java
public java.lang.Object getConnectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.dnsInput"></a>

```java
public PreparedQueryDns getDnsInput();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.failoverInput"></a>

```java
public PreparedQueryFailover getFailoverInput();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreCheckIdsInput`<sup>Optional</sup> <a name="ignoreCheckIdsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIdsInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreCheckIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nearInput`<sup>Optional</sup> <a name="nearInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nearInput"></a>

```java
public java.lang.String getNearInput();
```

- *Type:* java.lang.String

---

##### `nodeMetaInput`<sup>Optional</sup> <a name="nodeMetaInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMetaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onlyPassingInput`<sup>Optional</sup> <a name="onlyPassingInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassingInput"></a>

```java
public java.lang.Object getOnlyPassingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceMetaInput`<sup>Optional</sup> <a name="serviceMetaInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMetaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sessionInput`<sup>Optional</sup> <a name="sessionInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.sessionInput"></a>

```java
public java.lang.String getSessionInput();
```

- *Type:* java.lang.String

---

##### `storedTokenInput`<sup>Optional</sup> <a name="storedTokenInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedTokenInput"></a>

```java
public java.lang.String getStoredTokenInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.templateInput"></a>

```java
public PreparedQueryTemplate getTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `connect`<sup>Required</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.connect"></a>

```java
public java.lang.Object getConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreCheckIds`<sup>Required</sup> <a name="ignoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.ignoreCheckIds"></a>

```java
public java.util.List<java.lang.String> getIgnoreCheckIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `near`<sup>Required</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

---

##### `nodeMeta`<sup>Required</sup> <a name="nodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onlyPassing`<sup>Required</sup> <a name="onlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.onlyPassing"></a>

```java
public java.lang.Object getOnlyPassing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceMeta`<sup>Required</sup> <a name="serviceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.serviceMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `session`<sup>Required</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.session"></a>

```java
public java.lang.String getSession();
```

- *Type:* java.lang.String

---

##### `storedToken`<sup>Required</sup> <a name="storedToken" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.storedToken"></a>

```java
public java.lang.String getStoredToken();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.preparedQuery.PreparedQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PreparedQueryConfig <a name="PreparedQueryConfig" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQueryConfig;

PreparedQueryConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .service(java.lang.String)
//  .connect(java.lang.Boolean)
//  .connect(IResolvable)
//  .datacenter(java.lang.String)
//  .dns(PreparedQueryDns)
//  .failover(PreparedQueryFailover)
//  .id(java.lang.String)
//  .ignoreCheckIds(java.util.List<java.lang.String>)
//  .near(java.lang.String)
//  .nodeMeta(java.util.Map<java.lang.String, java.lang.String>)
//  .onlyPassing(java.lang.Boolean)
//  .onlyPassing(IResolvable)
//  .serviceMeta(java.util.Map<java.lang.String, java.lang.String>)
//  .session(java.lang.String)
//  .storedToken(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .template(PreparedQueryTemplate)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect">connect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds">ignoreCheckIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near">near</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta">nodeMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing">onlyPassing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta">serviceMeta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session">session</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken">storedToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#name PreparedQuery#name}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service PreparedQuery#service}.

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.connect"></a>

```java
public java.lang.Object getConnect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#connect PreparedQuery#connect}.

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenter PreparedQuery#datacenter}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.dns"></a>

```java
public PreparedQueryDns getDns();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

dns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#dns PreparedQuery#dns}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.failover"></a>

```java
public PreparedQueryFailover getFailover();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

failover block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#failover PreparedQuery#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#id PreparedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreCheckIds`<sup>Optional</sup> <a name="ignoreCheckIds" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.ignoreCheckIds"></a>

```java
public java.util.List<java.lang.String> getIgnoreCheckIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ignore_check_ids PreparedQuery#ignore_check_ids}.

---

##### `near`<sup>Optional</sup> <a name="near" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.near"></a>

```java
public java.lang.String getNear();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#near PreparedQuery#near}.

---

##### `nodeMeta`<sup>Optional</sup> <a name="nodeMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.nodeMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNodeMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#node_meta PreparedQuery#node_meta}.

---

##### `onlyPassing`<sup>Optional</sup> <a name="onlyPassing" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.onlyPassing"></a>

```java
public java.lang.Object getOnlyPassing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#only_passing PreparedQuery#only_passing}.

---

##### `serviceMeta`<sup>Optional</sup> <a name="serviceMeta" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.serviceMeta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#service_meta PreparedQuery#service_meta}.

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.session"></a>

```java
public java.lang.String getSession();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#session PreparedQuery#session}.

---

##### `storedToken`<sup>Optional</sup> <a name="storedToken" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.storedToken"></a>

```java
public java.lang.String getStoredToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#stored_token PreparedQuery#stored_token}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#tags PreparedQuery#tags}.

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.template"></a>

```java
public PreparedQueryTemplate getTemplate();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#template PreparedQuery#template}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-consul.preparedQuery.PreparedQueryConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#token PreparedQuery#token}.

---

### PreparedQueryDns <a name="PreparedQueryDns" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQueryDns;

PreparedQueryDns.builder()
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ttl PreparedQuery#ttl}. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDns.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#ttl PreparedQuery#ttl}.

---

### PreparedQueryFailover <a name="PreparedQueryFailover" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQueryFailover;

PreparedQueryFailover.builder()
//  .datacenters(java.util.List<java.lang.String>)
//  .nearestN(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenters PreparedQuery#datacenters}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN">nearestN</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#nearest_n PreparedQuery#nearest_n}. |

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#datacenters PreparedQuery#datacenters}.

---

##### `nearestN`<sup>Optional</sup> <a name="nearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailover.property.nearestN"></a>

```java
public java.lang.Number getNearestN();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#nearest_n PreparedQuery#nearest_n}.

---

### PreparedQueryTemplate <a name="PreparedQueryTemplate" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQueryTemplate;

PreparedQueryTemplate.builder()
    .regexp(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp">regexp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#regexp PreparedQuery#regexp}. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#type PreparedQuery#type}. |

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.regexp"></a>

```java
public java.lang.String getRegexp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#regexp PreparedQuery#regexp}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/prepared_query#type PreparedQuery#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### PreparedQueryDnsOutputReference <a name="PreparedQueryDnsOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQueryDnsOutputReference;

new PreparedQueryDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryDnsOutputReference.property.internalValue"></a>

```java
public PreparedQueryDns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryDns">PreparedQueryDns</a>

---


### PreparedQueryFailoverOutputReference <a name="PreparedQueryFailoverOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQueryFailoverOutputReference;

new PreparedQueryFailoverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN">resetNearestN</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetDatacenters"></a>

```java
public void resetDatacenters()
```

##### `resetNearestN` <a name="resetNearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.resetNearestN"></a>

```java
public void resetNearestN()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput">nearestNInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN">nearestN</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacentersInput"></a>

```java
public java.util.List<java.lang.String> getDatacentersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nearestNInput`<sup>Optional</sup> <a name="nearestNInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestNInput"></a>

```java
public java.lang.Number getNearestNInput();
```

- *Type:* java.lang.Number

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nearestN`<sup>Required</sup> <a name="nearestN" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.nearestN"></a>

```java
public java.lang.Number getNearestN();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryFailoverOutputReference.property.internalValue"></a>

```java
public PreparedQueryFailover getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryFailover">PreparedQueryFailover</a>

---


### PreparedQueryTemplateOutputReference <a name="PreparedQueryTemplateOutputReference" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.prepared_query.PreparedQueryTemplateOutputReference;

new PreparedQueryTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput">regexpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp">regexp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexpInput`<sup>Optional</sup> <a name="regexpInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexpInput"></a>

```java
public java.lang.String getRegexpInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `regexp`<sup>Required</sup> <a name="regexp" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.regexp"></a>

```java
public java.lang.String getRegexp();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.preparedQuery.PreparedQueryTemplateOutputReference.property.internalValue"></a>

```java
public PreparedQueryTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-consul.preparedQuery.PreparedQueryTemplate">PreparedQueryTemplate</a>

---



