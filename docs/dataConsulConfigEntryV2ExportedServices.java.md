# `dataConsulConfigEntryV2ExportedServices` Submodule <a name="`dataConsulConfigEntryV2ExportedServices` Submodule" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataConsulConfigEntryV2ExportedServices <a name="DataConsulConfigEntryV2ExportedServices" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services consul_config_entry_v2_exported_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_config_entry_v2_exported_services.DataConsulConfigEntryV2ExportedServices;

DataConsulConfigEntryV2ExportedServices.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kind(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .partitionConsumers(java.util.List<java.lang.String>)
//  .peerConsumers(java.util.List<java.lang.String>)
//  .samenessGroupConsumers(java.util.List<java.lang.String>)
//  .services(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices). |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the config entry to read. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partition">partition</a></code> | <code>java.lang.String</code> | The partition the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partitionConsumers">partitionConsumers</a></code> | <code>java.util.List<java.lang.String></code> | The exported service partition consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.peerConsumers">peerConsumers</a></code> | <code>java.util.List<java.lang.String></code> | The exported service peer consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.samenessGroupConsumers">samenessGroupConsumers</a></code> | <code>java.util.List<java.lang.String></code> | The exported service sameness group consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.services">services</a></code> | <code>java.util.List<java.lang.String></code> | The exported services. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#kind DataConsulConfigEntryV2ExportedServices#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the config entry to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#name DataConsulConfigEntryV2ExportedServices#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#namespace DataConsulConfigEntryV2ExportedServices#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partition"></a>

- *Type:* java.lang.String

The partition the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition DataConsulConfigEntryV2ExportedServices#partition}

---

##### `partitionConsumers`<sup>Optional</sup> <a name="partitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.partitionConsumers"></a>

- *Type:* java.util.List<java.lang.String>

The exported service partition consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition_consumers DataConsulConfigEntryV2ExportedServices#partition_consumers}

---

##### `peerConsumers`<sup>Optional</sup> <a name="peerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.peerConsumers"></a>

- *Type:* java.util.List<java.lang.String>

The exported service peer consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#peer_consumers DataConsulConfigEntryV2ExportedServices#peer_consumers}

---

##### `samenessGroupConsumers`<sup>Optional</sup> <a name="samenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.samenessGroupConsumers"></a>

- *Type:* java.util.List<java.lang.String>

The exported service sameness group consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#sameness_group_consumers DataConsulConfigEntryV2ExportedServices#sameness_group_consumers}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.Initializer.parameter.services"></a>

- *Type:* java.util.List<java.lang.String>

The exported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#services DataConsulConfigEntryV2ExportedServices#services}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers">resetPartitionConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers">resetPeerConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers">resetSamenessGroupConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices">resetServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetPartitionConsumers` <a name="resetPartitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPartitionConsumers"></a>

```java
public void resetPartitionConsumers()
```

##### `resetPeerConsumers` <a name="resetPeerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetPeerConsumers"></a>

```java
public void resetPeerConsumers()
```

##### `resetSamenessGroupConsumers` <a name="resetSamenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetSamenessGroupConsumers"></a>

```java
public void resetSamenessGroupConsumers()
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.resetServices"></a>

```java
public void resetServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_config_entry_v2_exported_services.DataConsulConfigEntryV2ExportedServices;

DataConsulConfigEntryV2ExportedServices.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_config_entry_v2_exported_services.DataConsulConfigEntryV2ExportedServices;

DataConsulConfigEntryV2ExportedServices.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_config_entry_v2_exported_services.DataConsulConfigEntryV2ExportedServices;

DataConsulConfigEntryV2ExportedServices.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_config_entry_v2_exported_services.DataConsulConfigEntryV2ExportedServices;

DataConsulConfigEntryV2ExportedServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataConsulConfigEntryV2ExportedServices.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataConsulConfigEntryV2ExportedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataConsulConfigEntryV2ExportedServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataConsulConfigEntryV2ExportedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataConsulConfigEntryV2ExportedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput">partitionConsumersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput">partitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput">peerConsumersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput">samenessGroupConsumersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput">servicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers">partitionConsumers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers">peerConsumers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers">samenessGroupConsumers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionConsumersInput`<sup>Optional</sup> <a name="partitionConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumersInput"></a>

```java
public java.util.List<java.lang.String> getPartitionConsumersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionInput"></a>

```java
public java.lang.String getPartitionInput();
```

- *Type:* java.lang.String

---

##### `peerConsumersInput`<sup>Optional</sup> <a name="peerConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumersInput"></a>

```java
public java.util.List<java.lang.String> getPeerConsumersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samenessGroupConsumersInput`<sup>Optional</sup> <a name="samenessGroupConsumersInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumersInput"></a>

```java
public java.util.List<java.lang.String> getSamenessGroupConsumersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.servicesInput"></a>

```java
public java.util.List<java.lang.String> getServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `partitionConsumers`<sup>Required</sup> <a name="partitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.partitionConsumers"></a>

```java
public java.util.List<java.lang.String> getPartitionConsumers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peerConsumers`<sup>Required</sup> <a name="peerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.peerConsumers"></a>

```java
public java.util.List<java.lang.String> getPeerConsumers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samenessGroupConsumers`<sup>Required</sup> <a name="samenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.samenessGroupConsumers"></a>

```java
public java.util.List<java.lang.String> getSamenessGroupConsumers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServices.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataConsulConfigEntryV2ExportedServicesConfig <a name="DataConsulConfigEntryV2ExportedServicesConfig" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.consul.data_consul_config_entry_v2_exported_services.DataConsulConfigEntryV2ExportedServicesConfig;

DataConsulConfigEntryV2ExportedServicesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kind(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .partition(java.lang.String)
//  .partitionConsumers(java.util.List<java.lang.String>)
//  .peerConsumers(java.util.List<java.lang.String>)
//  .samenessGroupConsumers(java.util.List<java.lang.String>)
//  .services(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices). |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the config entry to read. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition">partition</a></code> | <code>java.lang.String</code> | The partition the config entry is associated with. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers">partitionConsumers</a></code> | <code>java.util.List<java.lang.String></code> | The exported service partition consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers">peerConsumers</a></code> | <code>java.util.List<java.lang.String></code> | The exported service peer consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers">samenessGroupConsumers</a></code> | <code>java.util.List<java.lang.String></code> | The exported service sameness group consumers. |
| <code><a href="#@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services">services</a></code> | <code>java.util.List<java.lang.String></code> | The exported services. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The kind of exported services config (ExportedServices, NamespaceExportedServices, PartitionExportedServices).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#kind DataConsulConfigEntryV2ExportedServices#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the config entry to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#name DataConsulConfigEntryV2ExportedServices#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#id DataConsulConfigEntryV2ExportedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#namespace DataConsulConfigEntryV2ExportedServices#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

The partition the config entry is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition DataConsulConfigEntryV2ExportedServices#partition}

---

##### `partitionConsumers`<sup>Optional</sup> <a name="partitionConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.partitionConsumers"></a>

```java
public java.util.List<java.lang.String> getPartitionConsumers();
```

- *Type:* java.util.List<java.lang.String>

The exported service partition consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#partition_consumers DataConsulConfigEntryV2ExportedServices#partition_consumers}

---

##### `peerConsumers`<sup>Optional</sup> <a name="peerConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.peerConsumers"></a>

```java
public java.util.List<java.lang.String> getPeerConsumers();
```

- *Type:* java.util.List<java.lang.String>

The exported service peer consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#peer_consumers DataConsulConfigEntryV2ExportedServices#peer_consumers}

---

##### `samenessGroupConsumers`<sup>Optional</sup> <a name="samenessGroupConsumers" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.samenessGroupConsumers"></a>

```java
public java.util.List<java.lang.String> getSamenessGroupConsumers();
```

- *Type:* java.util.List<java.lang.String>

The exported service sameness group consumers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#sameness_group_consumers DataConsulConfigEntryV2ExportedServices#sameness_group_consumers}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-consul.dataConsulConfigEntryV2ExportedServices.DataConsulConfigEntryV2ExportedServicesConfig.property.services"></a>

```java
public java.util.List<java.lang.String> getServices();
```

- *Type:* java.util.List<java.lang.String>

The exported services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/data-sources/config_entry_v2_exported_services#services DataConsulConfigEntryV2ExportedServices#services}

---



