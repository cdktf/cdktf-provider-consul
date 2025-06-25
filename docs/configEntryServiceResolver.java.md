# `configEntryServiceResolver` Submodule <a name="`configEntryServiceResolver` Submodule" id="@cdktf/provider-consul.configEntryServiceResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceResolver <a name="ConfigEntryServiceResolver" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver consul_config_entry_service_resolver}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolver;

ConfigEntryServiceResolver.Builder.create(Construct scope, java.lang.String id)
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
//  .connectTimeout(java.lang.String)
//  .defaultSubset(java.lang.String)
//  .failover(IResolvable)
//  .failover(java.util.List<ConfigEntryServiceResolverFailover>)
//  .id(java.lang.String)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<ConfigEntryServiceResolverLoadBalancer>)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .redirect(IResolvable)
//  .redirect(java.util.List<ConfigEntryServiceResolverRedirect>)
//  .requestTimeout(java.lang.String)
//  .subsets(IResolvable)
//  .subsets(java.util.List<ConfigEntryServiceResolverSubsets>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connectTimeout">connectTimeout</a></code> | <code>java.lang.String</code> | Specifies the timeout duration for establishing new network connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.defaultSubset">defaultSubset</a></code> | <code>java.lang.String</code> | Specifies a defined subset of service instances to use when no explicit subset is requested. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.failover">failover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.redirect">redirect</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>></code> | redirect block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | Specifies the timeout duration for receiving an HTTP response from this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.subsets">subsets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>></code> | subsets block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.connectTimeout"></a>

- *Type:* java.lang.String

Specifies the timeout duration for establishing new network connections to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}

---

##### `defaultSubset`<sup>Optional</sup> <a name="defaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.defaultSubset"></a>

- *Type:* java.lang.String

Specifies a defined subset of service instances to use when no explicit subset is requested.

If this parameter is not specified, Consul uses the unnamed default subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.failover"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>>

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.loadBalancer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.meta"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Specifies the namespace that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

Specifies the admin partition that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.redirect"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.String

Specifies the timeout duration for receiving an HTTP response from this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}

---

##### `subsets`<sup>Optional</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.Initializer.parameter.subsets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>>

subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover">putFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets">putSubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset">resetDefaultSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets">resetSubsets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFailover` <a name="putFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover"></a>

```java
public void putFailover(IResolvable OR java.util.List<ConfigEntryServiceResolverFailover> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putFailover.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer"></a>

```java
public void putLoadBalancer(IResolvable OR java.util.List<ConfigEntryServiceResolverLoadBalancer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putLoadBalancer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect"></a>

```java
public void putRedirect(IResolvable OR java.util.List<ConfigEntryServiceResolverRedirect> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putRedirect.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>>

---

##### `putSubsets` <a name="putSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets"></a>

```java
public void putSubsets(IResolvable OR java.util.List<ConfigEntryServiceResolverSubsets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.putSubsets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>>

---

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetConnectTimeout"></a>

```java
public void resetConnectTimeout()
```

##### `resetDefaultSubset` <a name="resetDefaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetDefaultSubset"></a>

```java
public void resetDefaultSubset()
```

##### `resetFailover` <a name="resetFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetFailover"></a>

```java
public void resetFailover()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetMeta"></a>

```java
public void resetMeta()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRedirect"></a>

```java
public void resetRedirect()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetSubsets` <a name="resetSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.resetSubsets"></a>

```java
public void resetSubsets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolver;

ConfigEntryServiceResolver.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolver;

ConfigEntryServiceResolver.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolver;

ConfigEntryServiceResolver.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolver;

ConfigEntryServiceResolver.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigEntryServiceResolver.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConfigEntryServiceResolver resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigEntryServiceResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigEntryServiceResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover">failover</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets">subsets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput">defaultSubsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput">failoverInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput">loadBalancerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput">metaInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput">redirectInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput">subsetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset">defaultSubset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failover"></a>

```java
public ConfigEntryServiceResolverFailoverList getFailover();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList">ConfigEntryServiceResolverFailoverList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancer"></a>

```java
public ConfigEntryServiceResolverLoadBalancerList getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList">ConfigEntryServiceResolverLoadBalancerList</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirect"></a>

```java
public ConfigEntryServiceResolverRedirectList getRedirect();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList">ConfigEntryServiceResolverRedirectList</a>

---

##### `subsets`<sup>Required</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsets"></a>

```java
public ConfigEntryServiceResolverSubsetsList getSubsets();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList">ConfigEntryServiceResolverSubsetsList</a>

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeoutInput"></a>

```java
public java.lang.String getConnectTimeoutInput();
```

- *Type:* java.lang.String

---

##### `defaultSubsetInput`<sup>Optional</sup> <a name="defaultSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubsetInput"></a>

```java
public java.lang.String getDefaultSubsetInput();
```

- *Type:* java.lang.String

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.failoverInput"></a>

```java
public java.lang.Object getFailoverInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.loadBalancerInput"></a>

```java
public java.lang.Object getLoadBalancerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>>

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.metaInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetaInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.redirectInput"></a>

```java
public java.lang.Object getRedirectInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>>

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeoutInput"></a>

```java
public java.lang.String getRequestTimeoutInput();
```

- *Type:* java.lang.String

---

##### `subsetsInput`<sup>Optional</sup> <a name="subsetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.subsetsInput"></a>

```java
public java.lang.Object getSubsetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>>

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.connectTimeout"></a>

```java
public java.lang.String getConnectTimeout();
```

- *Type:* java.lang.String

---

##### `defaultSubset`<sup>Required</sup> <a name="defaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.defaultSubset"></a>

```java
public java.lang.String getDefaultSubset();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolver.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceResolverConfig <a name="ConfigEntryServiceResolverConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverConfig;

ConfigEntryServiceResolverConfig.builder()
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
//  .connectTimeout(java.lang.String)
//  .defaultSubset(java.lang.String)
//  .failover(IResolvable)
//  .failover(java.util.List<ConfigEntryServiceResolverFailover>)
//  .id(java.lang.String)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<ConfigEntryServiceResolverLoadBalancer>)
//  .meta(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .redirect(IResolvable)
//  .redirect(java.util.List<ConfigEntryServiceResolverRedirect>)
//  .requestTimeout(java.lang.String)
//  .subsets(IResolvable)
//  .subsets(java.util.List<ConfigEntryServiceResolverSubsets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies a name for the configuration entry. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout">connectTimeout</a></code> | <code>java.lang.String</code> | Specifies the timeout duration for establishing new network connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset">defaultSubset</a></code> | <code>java.lang.String</code> | Specifies a defined subset of service instances to use when no explicit subset is requested. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover">failover</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>></code> | failover block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta">meta</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies key-value pairs to add to the KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition that the service resolver applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect">redirect</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>></code> | redirect block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.String</code> | Specifies the timeout duration for receiving an HTTP response from this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets">subsets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>></code> | subsets block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies a name for the configuration entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.connectTimeout"></a>

```java
public java.lang.String getConnectTimeout();
```

- *Type:* java.lang.String

Specifies the timeout duration for establishing new network connections to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#connect_timeout ConfigEntryServiceResolver#connect_timeout}

---

##### `defaultSubset`<sup>Optional</sup> <a name="defaultSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.defaultSubset"></a>

```java
public java.lang.String getDefaultSubset();
```

- *Type:* java.lang.String

Specifies a defined subset of service instances to use when no explicit subset is requested.

If this parameter is not specified, Consul uses the unnamed default subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#default_subset ConfigEntryServiceResolver#default_subset}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.failover"></a>

```java
public java.lang.Object getFailover();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>>

failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#failover ConfigEntryServiceResolver#failover}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#id ConfigEntryServiceResolver#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.loadBalancer"></a>

```java
public java.lang.Object getLoadBalancer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#load_balancer ConfigEntryServiceResolver#load_balancer}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.meta"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMeta();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies key-value pairs to add to the KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#meta ConfigEntryServiceResolver#meta}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the namespace that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Specifies the admin partition that the service resolver applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.redirect"></a>

```java
public java.lang.Object getRedirect();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#redirect ConfigEntryServiceResolver#redirect}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.requestTimeout"></a>

```java
public java.lang.String getRequestTimeout();
```

- *Type:* java.lang.String

Specifies the timeout duration for receiving an HTTP response from this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#request_timeout ConfigEntryServiceResolver#request_timeout}

---

##### `subsets`<sup>Optional</sup> <a name="subsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverConfig.property.subsets"></a>

```java
public java.lang.Object getSubsets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>>

subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#subsets ConfigEntryServiceResolver#subsets}

---

### ConfigEntryServiceResolverFailover <a name="ConfigEntryServiceResolverFailover" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverFailover;

ConfigEntryServiceResolverFailover.builder()
    .subsetName(java.lang.String)
//  .datacenters(java.util.List<java.lang.String>)
//  .namespace(java.lang.String)
//  .samenessGroup(java.lang.String)
//  .service(java.lang.String)
//  .serviceSubset(java.lang.String)
//  .targets(IResolvable)
//  .targets(java.util.List<ConfigEntryServiceResolverFailoverTargets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName">subsetName</a></code> | <code>java.lang.String</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup">samenessGroup</a></code> | <code>java.lang.String</code> | Specifies the sameness group at the failover location where the failover services are deployed. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service">service</a></code> | <code>java.lang.String</code> | Specifies the name of the service to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets">targets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>></code> | targets block. |

---

##### `subsetName`<sup>Required</sup> <a name="subsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.subsetName"></a>

```java
public java.lang.String getSubsetName();
```

- *Type:* java.lang.String

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#subset_name ConfigEntryServiceResolver#subset_name}

---

##### `datacenters`<sup>Optional</sup> <a name="datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

Specifies an ordered list of datacenters at the failover location to attempt connections to during a failover scenario.

When Consul cannot establish a connection with the first datacenter in the list, it proceeds sequentially until establishing a connection with another datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#datacenters ConfigEntryServiceResolver#datacenters}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the namespace at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `samenessGroup`<sup>Optional</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.samenessGroup"></a>

```java
public java.lang.String getSamenessGroup();
```

- *Type:* java.lang.String

Specifies the sameness group at the failover location where the failover services are deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Specifies the name of the service to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

Specifies the name of a subset of service instances to resolve at the failover location during a failover scenario.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover.property.targets"></a>

```java
public java.lang.Object getTargets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>>

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#targets ConfigEntryServiceResolver#targets}

---

### ConfigEntryServiceResolverFailoverTargets <a name="ConfigEntryServiceResolverFailoverTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverFailoverTargets;

ConfigEntryServiceResolverFailoverTargets.builder()
//  .datacenter(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .peer(java.lang.String)
//  .service(java.lang.String)
//  .serviceSubset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace to use for the failover target. If empty, the default namespace is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition within the same datacenter to use for the failover target. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer">peer</a></code> | <code>java.lang.String</code> | Specifies the destination cluster peer to resolve the target service name from. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service">service</a></code> | <code>java.lang.String</code> | Specifies the service name to use for the failover target. If empty, the current service name is used. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | Specifies the named subset to use for the failover target. |

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Specifies the WAN federated datacenter to use for the failover target. If empty, the current datacenter is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the namespace to use for the failover target. If empty, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Specifies the admin partition within the same datacenter to use for the failover target.

If empty, the default partition is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.peer"></a>

```java
public java.lang.String getPeer();
```

- *Type:* java.lang.String

Specifies the destination cluster peer to resolve the target service name from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Specifies the service name to use for the failover target. If empty, the current service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

Specifies the named subset to use for the failover target.

If empty, the default subset for the requested service name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverLoadBalancer <a name="ConfigEntryServiceResolverLoadBalancer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancer;

ConfigEntryServiceResolverLoadBalancer.builder()
//  .hashPolicies(IResolvable)
//  .hashPolicies(java.util.List<ConfigEntryServiceResolverLoadBalancerHashPolicies>)
//  .leastRequestConfig(IResolvable)
//  .leastRequestConfig(java.util.List<ConfigEntryServiceResolverLoadBalancerLeastRequestConfig>)
//  .policy(java.lang.String)
//  .ringHashConfig(IResolvable)
//  .ringHashConfig(java.util.List<ConfigEntryServiceResolverLoadBalancerRingHashConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies">hashPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>></code> | hash_policies block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig">leastRequestConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>></code> | least_request_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy">policy</a></code> | <code>java.lang.String</code> | Specifies the type of load balancing policy for selecting a host. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig">ringHashConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>></code> | ring_hash_config block. |

---

##### `hashPolicies`<sup>Optional</sup> <a name="hashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.hashPolicies"></a>

```java
public java.lang.Object getHashPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>>

hash_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#hash_policies ConfigEntryServiceResolver#hash_policies}

---

##### `leastRequestConfig`<sup>Optional</sup> <a name="leastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.leastRequestConfig"></a>

```java
public java.lang.Object getLeastRequestConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>>

least_request_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#least_request_config ConfigEntryServiceResolver#least_request_config}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Specifies the type of load balancing policy for selecting a host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#policy ConfigEntryServiceResolver#policy}

---

##### `ringHashConfig`<sup>Optional</sup> <a name="ringHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer.property.ringHashConfig"></a>

```java
public java.lang.Object getRingHashConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>>

ring_hash_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#ring_hash_config ConfigEntryServiceResolver#ring_hash_config}

---

### ConfigEntryServiceResolverLoadBalancerHashPolicies <a name="ConfigEntryServiceResolverLoadBalancerHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerHashPolicies;

ConfigEntryServiceResolverLoadBalancerHashPolicies.builder()
//  .cookieConfig(IResolvable)
//  .cookieConfig(java.util.List<ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig>)
//  .field(java.lang.String)
//  .fieldValue(java.lang.String)
//  .sourceIp(java.lang.Boolean)
//  .sourceIp(IResolvable)
//  .terminal(java.lang.Boolean)
//  .terminal(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig">cookieConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>></code> | cookie_config block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field">field</a></code> | <code>java.lang.String</code> | Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue">fieldValue</a></code> | <code>java.lang.String</code> | Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp">sourceIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if the hash type should be source IP address. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal">terminal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if Consul should stop computing the hash when multiple hash policies are present. |

---

##### `cookieConfig`<sup>Optional</sup> <a name="cookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.cookieConfig"></a>

```java
public java.lang.Object getCookieConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>>

cookie_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#cookie_config ConfigEntryServiceResolver#cookie_config}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

Specifies the attribute type to hash on. You cannot specify the Field parameter if SourceIP is also configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#field ConfigEntryServiceResolver#field}

---

##### `fieldValue`<sup>Optional</sup> <a name="fieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.fieldValue"></a>

```java
public java.lang.String getFieldValue();
```

- *Type:* java.lang.String

Specifies the value to hash, such as a header name, cookie name, or a URL query parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#field_value ConfigEntryServiceResolver#field_value}

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.sourceIp"></a>

```java
public java.lang.Object getSourceIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if the hash type should be source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#source_ip ConfigEntryServiceResolver#source_ip}

---

##### `terminal`<sup>Optional</sup> <a name="terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies.property.terminal"></a>

```java
public java.lang.Object getTerminal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if Consul should stop computing the hash when multiple hash policies are present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#terminal ConfigEntryServiceResolver#terminal}

---

### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig;

ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.builder()
//  .path(java.lang.String)
//  .session(java.lang.Boolean)
//  .session(IResolvable)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path">path</a></code> | <code>java.lang.String</code> | Specifies the path to set for the cookie. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session">session</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Directs Consul to generate a session cookie with no expiration. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Specifies the TTL for generated cookies. Cannot be specified for session cookies. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Specifies the path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#path ConfigEntryServiceResolver#path}

---

##### `session`<sup>Optional</sup> <a name="session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.session"></a>

```java
public java.lang.Object getSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Directs Consul to generate a session cookie with no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#session ConfigEntryServiceResolver#session}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Specifies the TTL for generated cookies. Cannot be specified for session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#ttl ConfigEntryServiceResolver#ttl}

---

### ConfigEntryServiceResolverLoadBalancerLeastRequestConfig <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig;

ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.builder()
//  .choiceCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount">choiceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}. |

---

##### `choiceCount`<sup>Optional</sup> <a name="choiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig.property.choiceCount"></a>

```java
public java.lang.Number getChoiceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#choice_count ConfigEntryServiceResolver#choice_count}.

---

### ConfigEntryServiceResolverLoadBalancerRingHashConfig <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig;

ConfigEntryServiceResolverLoadBalancerRingHashConfig.builder()
//  .maximumRingSize(java.lang.Number)
//  .minimumRingSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize">maximumRingSize</a></code> | <code>java.lang.Number</code> | Determines the maximum number of entries in the hash ring. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | Determines the minimum number of entries in the hash ring. |

---

##### `maximumRingSize`<sup>Optional</sup> <a name="maximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.maximumRingSize"></a>

```java
public java.lang.Number getMaximumRingSize();
```

- *Type:* java.lang.Number

Determines the maximum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#maximum_ring_size ConfigEntryServiceResolver#maximum_ring_size}

---

##### `minimumRingSize`<sup>Optional</sup> <a name="minimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

Determines the minimum number of entries in the hash ring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#minimum_ring_size ConfigEntryServiceResolver#minimum_ring_size}

---

### ConfigEntryServiceResolverRedirect <a name="ConfigEntryServiceResolverRedirect" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverRedirect;

ConfigEntryServiceResolverRedirect.builder()
//  .datacenter(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .peer(java.lang.String)
//  .samenessGroup(java.lang.String)
//  .service(java.lang.String)
//  .serviceSubset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | Specifies the datacenter at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Specifies the namespace at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition">partition</a></code> | <code>java.lang.String</code> | Specifies the admin partition at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer">peer</a></code> | <code>java.lang.String</code> | Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup">samenessGroup</a></code> | <code>java.lang.String</code> | Specifies the sameness group at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service">service</a></code> | <code>java.lang.String</code> | Specifies the name of a service at the redirect’s destination that resolves local upstream requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests. |

---

##### `datacenter`<sup>Optional</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

Specifies the datacenter at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#datacenter ConfigEntryServiceResolver#datacenter}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Specifies the namespace at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#namespace ConfigEntryServiceResolver#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

Specifies the admin partition at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#partition ConfigEntryServiceResolver#partition}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.peer"></a>

```java
public java.lang.String getPeer();
```

- *Type:* java.lang.String

Specifies the cluster with an active cluster peering connection at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#peer ConfigEntryServiceResolver#peer}

---

##### `samenessGroup`<sup>Optional</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.samenessGroup"></a>

```java
public java.lang.String getSamenessGroup();
```

- *Type:* java.lang.String

Specifies the sameness group at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#sameness_group ConfigEntryServiceResolver#sameness_group}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Specifies the name of a service at the redirect’s destination that resolves local upstream requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#service ConfigEntryServiceResolver#service}

---

##### `serviceSubset`<sup>Optional</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

Specifies the name of a subset of services at the redirect’s destination that resolves local upstream requests.

If empty, the default subset is used. If specified, you must also specify at least one of the following in the same Redirect map: Service, Namespace, andDatacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#service_subset ConfigEntryServiceResolver#service_subset}

---

### ConfigEntryServiceResolverSubsets <a name="ConfigEntryServiceResolverSubsets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverSubsets;

ConfigEntryServiceResolverSubsets.builder()
    .filter(java.lang.String)
    .name(java.lang.String)
    .onlyPassing(java.lang.Boolean)
    .onlyPassing(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter">filter</a></code> | <code>java.lang.String</code> | Specifies an expression that filters the DNS elements of service instances that belong to the subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name">name</a></code> | <code>java.lang.String</code> | Name of subset. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing">onlyPassing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines if instances that return a warning from a health check are allowed to resolve a request. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Specifies an expression that filters the DNS elements of service instances that belong to the subset.

If empty, all healthy instances of a service are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#filter ConfigEntryServiceResolver#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#name ConfigEntryServiceResolver#name}

---

##### `onlyPassing`<sup>Required</sup> <a name="onlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets.property.onlyPassing"></a>

```java
public java.lang.Object getOnlyPassing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines if instances that return a warning from a health check are allowed to resolve a request.

When set to false, instances with passing and warning states are considered healthy. When set to true, only instances with a passing health check state are considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/config_entry_service_resolver#only_passing ConfigEntryServiceResolver#only_passing}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceResolverFailoverList <a name="ConfigEntryServiceResolverFailoverList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverFailoverList;

new ConfigEntryServiceResolverFailoverList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get"></a>

```java
public ConfigEntryServiceResolverFailoverOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>>

---


### ConfigEntryServiceResolverFailoverOutputReference <a name="ConfigEntryServiceResolverFailoverOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverFailoverOutputReference;

new ConfigEntryServiceResolverFailoverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters">resetDatacenters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup">resetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets"></a>

```java
public void putTargets(IResolvable OR java.util.List<ConfigEntryServiceResolverFailoverTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.putTargets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>>

---

##### `resetDatacenters` <a name="resetDatacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetDatacenters"></a>

```java
public void resetDatacenters()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSamenessGroup` <a name="resetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetSamenessGroup"></a>

```java
public void resetSamenessGroup()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetServiceSubset"></a>

```java
public void resetServiceSubset()
```

##### `resetTargets` <a name="resetTargets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.resetTargets"></a>

```java
public void resetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput">datacentersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput">samenessGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput">subsetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput">targetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters">datacenters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup">samenessGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName">subsetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targets"></a>

```java
public ConfigEntryServiceResolverFailoverTargetsList getTargets();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList">ConfigEntryServiceResolverFailoverTargetsList</a>

---

##### `datacentersInput`<sup>Optional</sup> <a name="datacentersInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacentersInput"></a>

```java
public java.util.List<java.lang.String> getDatacentersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `samenessGroupInput`<sup>Optional</sup> <a name="samenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroupInput"></a>

```java
public java.lang.String getSamenessGroupInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubsetInput"></a>

```java
public java.lang.String getServiceSubsetInput();
```

- *Type:* java.lang.String

---

##### `subsetNameInput`<sup>Optional</sup> <a name="subsetNameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetNameInput"></a>

```java
public java.lang.String getSubsetNameInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.targetsInput"></a>

```java
public java.lang.Object getTargetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>>

---

##### `datacenters`<sup>Required</sup> <a name="datacenters" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.datacenters"></a>

```java
public java.util.List<java.lang.String> getDatacenters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `samenessGroup`<sup>Required</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.samenessGroup"></a>

```java
public java.lang.String getSamenessGroup();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

---

##### `subsetName`<sup>Required</sup> <a name="subsetName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.subsetName"></a>

```java
public java.lang.String getSubsetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailover">ConfigEntryServiceResolverFailover</a>

---


### ConfigEntryServiceResolverFailoverTargetsList <a name="ConfigEntryServiceResolverFailoverTargetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverFailoverTargetsList;

new ConfigEntryServiceResolverFailoverTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get"></a>

```java
public ConfigEntryServiceResolverFailoverTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>>

---


### ConfigEntryServiceResolverFailoverTargetsOutputReference <a name="ConfigEntryServiceResolverFailoverTargetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverFailoverTargetsOutputReference;

new ConfigEntryServiceResolverFailoverTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer">resetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetPeer` <a name="resetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetPeer"></a>

```java
public void resetPeer()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.resetServiceSubset"></a>

```java
public void resetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput">peerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer">peer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `peerInput`<sup>Optional</sup> <a name="peerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peerInput"></a>

```java
public java.lang.String getPeerInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubsetInput"></a>

```java
public java.lang.String getServiceSubsetInput();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.peer"></a>

```java
public java.lang.String getPeer();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverFailoverTargets">ConfigEntryServiceResolverFailoverTargets</a>

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get"></a>

```java
public ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>>

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession">resetSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSession` <a name="resetSession" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetSession"></a>

```java
public void resetSession()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput">sessionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session">session</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sessionInput`<sup>Optional</sup> <a name="sessionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.sessionInput"></a>

```java
public java.lang.Object getSessionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `session`<sup>Required</sup> <a name="session" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.session"></a>

```java
public java.lang.Object getSession();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesList <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get"></a>

```java
public ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>>

---


### ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference <a name="ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference;

new ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig">putCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig">resetCookieConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue">resetFieldValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal">resetTerminal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookieConfig` <a name="putCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig"></a>

```java
public void putCookieConfig(IResolvable OR java.util.List<ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.putCookieConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>>

---

##### `resetCookieConfig` <a name="resetCookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetCookieConfig"></a>

```java
public void resetCookieConfig()
```

##### `resetField` <a name="resetField" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetField"></a>

```java
public void resetField()
```

##### `resetFieldValue` <a name="resetFieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetFieldValue"></a>

```java
public void resetFieldValue()
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetSourceIp"></a>

```java
public void resetSourceIp()
```

##### `resetTerminal` <a name="resetTerminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.resetTerminal"></a>

```java
public void resetTerminal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig">cookieConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput">cookieConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput">fieldValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput">terminalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue">fieldValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp">sourceIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal">terminal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieConfig`<sup>Required</sup> <a name="cookieConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfig"></a>

```java
public ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList getCookieConfig();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfigList</a>

---

##### `cookieConfigInput`<sup>Optional</sup> <a name="cookieConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.cookieConfigInput"></a>

```java
public java.lang.Object getCookieConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig">ConfigEntryServiceResolverLoadBalancerHashPoliciesCookieConfig</a>>

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `fieldValueInput`<sup>Optional</sup> <a name="fieldValueInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValueInput"></a>

```java
public java.lang.String getFieldValueInput();
```

- *Type:* java.lang.String

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIpInput"></a>

```java
public java.lang.Object getSourceIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminalInput`<sup>Optional</sup> <a name="terminalInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminalInput"></a>

```java
public java.lang.Object getTerminalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `fieldValue`<sup>Required</sup> <a name="fieldValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.fieldValue"></a>

```java
public java.lang.String getFieldValue();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.sourceIp"></a>

```java
public java.lang.Object getSourceIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `terminal`<sup>Required</sup> <a name="terminal" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.terminal"></a>

```java
public java.lang.Object getTerminal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList;

new ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get"></a>

```java
public ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>>

---


### ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference;

new ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount">resetChoiceCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChoiceCount` <a name="resetChoiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.resetChoiceCount"></a>

```java
public void resetChoiceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput">choiceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount">choiceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `choiceCountInput`<sup>Optional</sup> <a name="choiceCountInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCountInput"></a>

```java
public java.lang.Number getChoiceCountInput();
```

- *Type:* java.lang.Number

---

##### `choiceCount`<sup>Required</sup> <a name="choiceCount" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.choiceCount"></a>

```java
public java.lang.Number getChoiceCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>

---


### ConfigEntryServiceResolverLoadBalancerList <a name="ConfigEntryServiceResolverLoadBalancerList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerList;

new ConfigEntryServiceResolverLoadBalancerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get"></a>

```java
public ConfigEntryServiceResolverLoadBalancerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>>

---


### ConfigEntryServiceResolverLoadBalancerOutputReference <a name="ConfigEntryServiceResolverLoadBalancerOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerOutputReference;

new ConfigEntryServiceResolverLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies">putHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig">putLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig">putRingHashConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies">resetHashPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig">resetLeastRequestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig">resetRingHashConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHashPolicies` <a name="putHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies"></a>

```java
public void putHashPolicies(IResolvable OR java.util.List<ConfigEntryServiceResolverLoadBalancerHashPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putHashPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>>

---

##### `putLeastRequestConfig` <a name="putLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig"></a>

```java
public void putLeastRequestConfig(IResolvable OR java.util.List<ConfigEntryServiceResolverLoadBalancerLeastRequestConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putLeastRequestConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>>

---

##### `putRingHashConfig` <a name="putRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig"></a>

```java
public void putRingHashConfig(IResolvable OR java.util.List<ConfigEntryServiceResolverLoadBalancerRingHashConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.putRingHashConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>>

---

##### `resetHashPolicies` <a name="resetHashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetHashPolicies"></a>

```java
public void resetHashPolicies()
```

##### `resetLeastRequestConfig` <a name="resetLeastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetLeastRequestConfig"></a>

```java
public void resetLeastRequestConfig()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetRingHashConfig` <a name="resetRingHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.resetRingHashConfig"></a>

```java
public void resetRingHashConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies">hashPolicies</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig">leastRequestConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig">ringHashConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput">hashPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput">leastRequestConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput">ringHashConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hashPolicies`<sup>Required</sup> <a name="hashPolicies" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPolicies"></a>

```java
public ConfigEntryServiceResolverLoadBalancerHashPoliciesList getHashPolicies();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPoliciesList">ConfigEntryServiceResolverLoadBalancerHashPoliciesList</a>

---

##### `leastRequestConfig`<sup>Required</sup> <a name="leastRequestConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfig"></a>

```java
public ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList getLeastRequestConfig();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList">ConfigEntryServiceResolverLoadBalancerLeastRequestConfigList</a>

---

##### `ringHashConfig`<sup>Required</sup> <a name="ringHashConfig" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfig"></a>

```java
public ConfigEntryServiceResolverLoadBalancerRingHashConfigList getRingHashConfig();
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList">ConfigEntryServiceResolverLoadBalancerRingHashConfigList</a>

---

##### `hashPoliciesInput`<sup>Optional</sup> <a name="hashPoliciesInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.hashPoliciesInput"></a>

```java
public java.lang.Object getHashPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerHashPolicies">ConfigEntryServiceResolverLoadBalancerHashPolicies</a>>

---

##### `leastRequestConfigInput`<sup>Optional</sup> <a name="leastRequestConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.leastRequestConfigInput"></a>

```java
public java.lang.Object getLeastRequestConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerLeastRequestConfig">ConfigEntryServiceResolverLoadBalancerLeastRequestConfig</a>>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `ringHashConfigInput`<sup>Optional</sup> <a name="ringHashConfigInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.ringHashConfigInput"></a>

```java
public java.lang.Object getRingHashConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancer">ConfigEntryServiceResolverLoadBalancer</a>

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigList <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList;

new ConfigEntryServiceResolverLoadBalancerRingHashConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get"></a>

```java
public ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>>

---


### ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference <a name="ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference;

new ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize">resetMaximumRingSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize">resetMinimumRingSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumRingSize` <a name="resetMaximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMaximumRingSize"></a>

```java
public void resetMaximumRingSize()
```

##### `resetMinimumRingSize` <a name="resetMinimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.resetMinimumRingSize"></a>

```java
public void resetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput">maximumRingSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput">minimumRingSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize">maximumRingSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumRingSizeInput`<sup>Optional</sup> <a name="maximumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSizeInput"></a>

```java
public java.lang.Number getMaximumRingSizeInput();
```

- *Type:* java.lang.Number

---

##### `minimumRingSizeInput`<sup>Optional</sup> <a name="minimumRingSizeInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSizeInput"></a>

```java
public java.lang.Number getMinimumRingSizeInput();
```

- *Type:* java.lang.Number

---

##### `maximumRingSize`<sup>Required</sup> <a name="maximumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.maximumRingSize"></a>

```java
public java.lang.Number getMaximumRingSize();
```

- *Type:* java.lang.Number

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverLoadBalancerRingHashConfig">ConfigEntryServiceResolverLoadBalancerRingHashConfig</a>

---


### ConfigEntryServiceResolverRedirectList <a name="ConfigEntryServiceResolverRedirectList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverRedirectList;

new ConfigEntryServiceResolverRedirectList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get"></a>

```java
public ConfigEntryServiceResolverRedirectOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>>

---


### ConfigEntryServiceResolverRedirectOutputReference <a name="ConfigEntryServiceResolverRedirectOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverRedirectOutputReference;

new ConfigEntryServiceResolverRedirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter">resetDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer">resetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup">resetSamenessGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset">resetServiceSubset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatacenter` <a name="resetDatacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetDatacenter"></a>

```java
public void resetDatacenter()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetPeer` <a name="resetPeer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetPeer"></a>

```java
public void resetPeer()
```

##### `resetSamenessGroup` <a name="resetSamenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetSamenessGroup"></a>

```java
public void resetSamenessGroup()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetServiceSubset` <a name="resetServiceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.resetServiceSubset"></a>

```java
public void resetServiceSubset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput">datacenterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput">peerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput">samenessGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput">serviceSubsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter">datacenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer">peer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup">samenessGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset">serviceSubset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datacenterInput`<sup>Optional</sup> <a name="datacenterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenterInput"></a>

```java
public java.lang.String getDatacenterInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `peerInput`<sup>Optional</sup> <a name="peerInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peerInput"></a>

```java
public java.lang.String getPeerInput();
```

- *Type:* java.lang.String

---

##### `samenessGroupInput`<sup>Optional</sup> <a name="samenessGroupInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroupInput"></a>

```java
public java.lang.String getSamenessGroupInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceSubsetInput`<sup>Optional</sup> <a name="serviceSubsetInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubsetInput"></a>

```java
public java.lang.String getServiceSubsetInput();
```

- *Type:* java.lang.String

---

##### `datacenter`<sup>Required</sup> <a name="datacenter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.datacenter"></a>

```java
public java.lang.String getDatacenter();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.peer"></a>

```java
public java.lang.String getPeer();
```

- *Type:* java.lang.String

---

##### `samenessGroup`<sup>Required</sup> <a name="samenessGroup" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.samenessGroup"></a>

```java
public java.lang.String getSamenessGroup();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceSubset`<sup>Required</sup> <a name="serviceSubset" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.serviceSubset"></a>

```java
public java.lang.String getServiceSubset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirectOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverRedirect">ConfigEntryServiceResolverRedirect</a>

---


### ConfigEntryServiceResolverSubsetsList <a name="ConfigEntryServiceResolverSubsetsList" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverSubsetsList;

new ConfigEntryServiceResolverSubsetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get"></a>

```java
public ConfigEntryServiceResolverSubsetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>>

---


### ConfigEntryServiceResolverSubsetsOutputReference <a name="ConfigEntryServiceResolverSubsetsOutputReference" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.config_entry_service_resolver.ConfigEntryServiceResolverSubsetsOutputReference;

new ConfigEntryServiceResolverSubsetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput">onlyPassingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing">onlyPassing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `onlyPassingInput`<sup>Optional</sup> <a name="onlyPassingInput" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassingInput"></a>

```java
public java.lang.Object getOnlyPassingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `onlyPassing`<sup>Required</sup> <a name="onlyPassing" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.onlyPassing"></a>

```java
public java.lang.Object getOnlyPassing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-consul.configEntryServiceResolver.ConfigEntryServiceResolverSubsets">ConfigEntryServiceResolverSubsets</a>

---



