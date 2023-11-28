# `configEntryServiceDefaults` Submodule <a name="`configEntryServiceDefaults` Submodule" id="@cdktf/provider-consul.configEntryServiceDefaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigEntryServiceDefaults <a name="ConfigEntryServiceDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults consul_config_entry_service_defaults}.

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaults(scope: Construct, id: string, config: ConfigEntryServiceDefaultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig">ConfigEntryServiceDefaultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig">ConfigEntryServiceDefaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions">putEnvoyExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose">putExpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway">putMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy">putTransparentProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig">putUpstreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetBalanceInboundConnections">resetBalanceInboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetEnvoyExtensions">resetEnvoyExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetExternalSni">resetExternalSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalConnectTimeoutMs">resetLocalConnectTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalRequestTimeoutMs">resetLocalRequestTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMaxInboundConnections">resetMaxInboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeshGateway">resetMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeta">resetMeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMutualTlsMode">resetMutualTlsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetTransparentProxy">resetTransparentProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetUpstreamConfig">resetUpstreamConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination"></a>

```typescript
public putDestination(value: IResolvable | ConfigEntryServiceDefaultsDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>[]

---

##### `putEnvoyExtensions` <a name="putEnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions"></a>

```typescript
public putEnvoyExtensions(value: IResolvable | ConfigEntryServiceDefaultsEnvoyExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putEnvoyExtensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>[]

---

##### `putExpose` <a name="putExpose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose"></a>

```typescript
public putExpose(value: IResolvable | ConfigEntryServiceDefaultsExpose[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putExpose.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>[]

---

##### `putMeshGateway` <a name="putMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway"></a>

```typescript
public putMeshGateway(value: IResolvable | ConfigEntryServiceDefaultsMeshGateway[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putMeshGateway.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>[]

---

##### `putTransparentProxy` <a name="putTransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy"></a>

```typescript
public putTransparentProxy(value: IResolvable | ConfigEntryServiceDefaultsTransparentProxy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putTransparentProxy.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>[]

---

##### `putUpstreamConfig` <a name="putUpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig"></a>

```typescript
public putUpstreamConfig(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.putUpstreamConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>[]

---

##### `resetBalanceInboundConnections` <a name="resetBalanceInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetBalanceInboundConnections"></a>

```typescript
public resetBalanceInboundConnections(): void
```

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetEnvoyExtensions` <a name="resetEnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetEnvoyExtensions"></a>

```typescript
public resetEnvoyExtensions(): void
```

##### `resetExternalSni` <a name="resetExternalSni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetExternalSni"></a>

```typescript
public resetExternalSni(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalConnectTimeoutMs` <a name="resetLocalConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalConnectTimeoutMs"></a>

```typescript
public resetLocalConnectTimeoutMs(): void
```

##### `resetLocalRequestTimeoutMs` <a name="resetLocalRequestTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetLocalRequestTimeoutMs"></a>

```typescript
public resetLocalRequestTimeoutMs(): void
```

##### `resetMaxInboundConnections` <a name="resetMaxInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMaxInboundConnections"></a>

```typescript
public resetMaxInboundConnections(): void
```

##### `resetMeshGateway` <a name="resetMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeshGateway"></a>

```typescript
public resetMeshGateway(): void
```

##### `resetMeta` <a name="resetMeta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMeta"></a>

```typescript
public resetMeta(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetMutualTlsMode` <a name="resetMutualTlsMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetMutualTlsMode"></a>

```typescript
public resetMutualTlsMode(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetTransparentProxy` <a name="resetTransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetTransparentProxy"></a>

```typescript
public resetTransparentProxy(): void
```

##### `resetUpstreamConfig` <a name="resetUpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.resetUpstreamConfig"></a>

```typescript
public resetUpstreamConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigEntryServiceDefaults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConfigEntryServiceDefaults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigEntryServiceDefaults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigEntryServiceDefaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConfigEntryServiceDefaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList">ConfigEntryServiceDefaultsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensions">envoyExtensions</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList">ConfigEntryServiceDefaultsEnvoyExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.expose">expose</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList">ConfigEntryServiceDefaultsExposeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGateway">meshGateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList">ConfigEntryServiceDefaultsMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxy">transparentProxy</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList">ConfigEntryServiceDefaultsTransparentProxyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfig">upstreamConfig</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList">ConfigEntryServiceDefaultsUpstreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnectionsInput">balanceInboundConnectionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destinationInput">destinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensionsInput">envoyExtensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.exposeInput">exposeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSniInput">externalSniInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMsInput">localConnectTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMsInput">localRequestTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnectionsInput">maxInboundConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGatewayInput">meshGatewayInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.metaInput">metaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsModeInput">mutualTlsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxyInput">transparentProxyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfigInput">upstreamConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnections">balanceInboundConnections</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSni">externalSni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMs">localConnectTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMs">localRequestTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnections">maxInboundConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsMode">mutualTlsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destination"></a>

```typescript
public readonly destination: ConfigEntryServiceDefaultsDestinationList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList">ConfigEntryServiceDefaultsDestinationList</a>

---

##### `envoyExtensions`<sup>Required</sup> <a name="envoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensions"></a>

```typescript
public readonly envoyExtensions: ConfigEntryServiceDefaultsEnvoyExtensionsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList">ConfigEntryServiceDefaultsEnvoyExtensionsList</a>

---

##### `expose`<sup>Required</sup> <a name="expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.expose"></a>

```typescript
public readonly expose: ConfigEntryServiceDefaultsExposeList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList">ConfigEntryServiceDefaultsExposeList</a>

---

##### `meshGateway`<sup>Required</sup> <a name="meshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGateway"></a>

```typescript
public readonly meshGateway: ConfigEntryServiceDefaultsMeshGatewayList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList">ConfigEntryServiceDefaultsMeshGatewayList</a>

---

##### `transparentProxy`<sup>Required</sup> <a name="transparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxy"></a>

```typescript
public readonly transparentProxy: ConfigEntryServiceDefaultsTransparentProxyList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList">ConfigEntryServiceDefaultsTransparentProxyList</a>

---

##### `upstreamConfig`<sup>Required</sup> <a name="upstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfig"></a>

```typescript
public readonly upstreamConfig: ConfigEntryServiceDefaultsUpstreamConfigList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList">ConfigEntryServiceDefaultsUpstreamConfigList</a>

---

##### `balanceInboundConnectionsInput`<sup>Optional</sup> <a name="balanceInboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnectionsInput"></a>

```typescript
public readonly balanceInboundConnectionsInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | ConfigEntryServiceDefaultsDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>[]

---

##### `envoyExtensionsInput`<sup>Optional</sup> <a name="envoyExtensionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.envoyExtensionsInput"></a>

```typescript
public readonly envoyExtensionsInput: IResolvable | ConfigEntryServiceDefaultsEnvoyExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>[]

---

##### `exposeInput`<sup>Optional</sup> <a name="exposeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.exposeInput"></a>

```typescript
public readonly exposeInput: IResolvable | ConfigEntryServiceDefaultsExpose[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>[]

---

##### `externalSniInput`<sup>Optional</sup> <a name="externalSniInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSniInput"></a>

```typescript
public readonly externalSniInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localConnectTimeoutMsInput`<sup>Optional</sup> <a name="localConnectTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMsInput"></a>

```typescript
public readonly localConnectTimeoutMsInput: number;
```

- *Type:* number

---

##### `localRequestTimeoutMsInput`<sup>Optional</sup> <a name="localRequestTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMsInput"></a>

```typescript
public readonly localRequestTimeoutMsInput: number;
```

- *Type:* number

---

##### `maxInboundConnectionsInput`<sup>Optional</sup> <a name="maxInboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnectionsInput"></a>

```typescript
public readonly maxInboundConnectionsInput: number;
```

- *Type:* number

---

##### `meshGatewayInput`<sup>Optional</sup> <a name="meshGatewayInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meshGatewayInput"></a>

```typescript
public readonly meshGatewayInput: IResolvable | ConfigEntryServiceDefaultsMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>[]

---

##### `metaInput`<sup>Optional</sup> <a name="metaInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.metaInput"></a>

```typescript
public readonly metaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mutualTlsModeInput`<sup>Optional</sup> <a name="mutualTlsModeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsModeInput"></a>

```typescript
public readonly mutualTlsModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `transparentProxyInput`<sup>Optional</sup> <a name="transparentProxyInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.transparentProxyInput"></a>

```typescript
public readonly transparentProxyInput: IResolvable | ConfigEntryServiceDefaultsTransparentProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>[]

---

##### `upstreamConfigInput`<sup>Optional</sup> <a name="upstreamConfigInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.upstreamConfigInput"></a>

```typescript
public readonly upstreamConfigInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>[]

---

##### `balanceInboundConnections`<sup>Required</sup> <a name="balanceInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.balanceInboundConnections"></a>

```typescript
public readonly balanceInboundConnections: string;
```

- *Type:* string

---

##### `externalSni`<sup>Required</sup> <a name="externalSni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.externalSni"></a>

```typescript
public readonly externalSni: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localConnectTimeoutMs`<sup>Required</sup> <a name="localConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localConnectTimeoutMs"></a>

```typescript
public readonly localConnectTimeoutMs: number;
```

- *Type:* number

---

##### `localRequestTimeoutMs`<sup>Required</sup> <a name="localRequestTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.localRequestTimeoutMs"></a>

```typescript
public readonly localRequestTimeoutMs: number;
```

- *Type:* number

---

##### `maxInboundConnections`<sup>Required</sup> <a name="maxInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.maxInboundConnections"></a>

```typescript
public readonly maxInboundConnections: number;
```

- *Type:* number

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `mutualTlsMode`<sup>Required</sup> <a name="mutualTlsMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.mutualTlsMode"></a>

```typescript
public readonly mutualTlsMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigEntryServiceDefaultsConfig <a name="ConfigEntryServiceDefaultsConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsConfig: configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.expose">expose</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>[]</code> | expose block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the service you are setting the defaults for. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.protocol">protocol</a></code> | <code>string</code> | Specifies the default protocol for the service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.balanceInboundConnections">balanceInboundConnections</a></code> | <code>string</code> | Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.destination">destination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.envoyExtensions">envoyExtensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>[]</code> | envoy_extensions block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.externalSni">externalSni</a></code> | <code>string</code> | Specifies the TLS server name indication (SNI) when federating with an external system. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localConnectTimeoutMs">localConnectTimeoutMs</a></code> | <code>number</code> | Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localRequestTimeoutMs">localRequestTimeoutMs</a></code> | <code>number</code> | Specifies the timeout for HTTP requests to the local application instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.maxInboundConnections">maxInboundConnections</a></code> | <code>number</code> | Specifies the maximum number of concurrent inbound connections to each service instance. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meshGateway">meshGateway</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>[]</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meta">meta</a></code> | <code>{[ key: string ]: string}</code> | Specifies a set of custom key-value pairs to add to the Consul KV store. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mode">mode</a></code> | <code>string</code> | Specifies a mode for how the service directs inbound and outbound traffic. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mutualTlsMode">mutualTlsMode</a></code> | <code>string</code> | Controls whether mutual TLS is required for incoming connections to this service. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.namespace">namespace</a></code> | <code>string</code> | Specifies the Consul namespace that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.partition">partition</a></code> | <code>string</code> | Specifies the name of the name of the Consul admin partition that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.transparentProxy">transparentProxy</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>[]</code> | transparent_proxy block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.upstreamConfig">upstreamConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>[]</code> | upstream_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expose`<sup>Required</sup> <a name="expose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.expose"></a>

```typescript
public readonly expose: IResolvable | ConfigEntryServiceDefaultsExpose[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>[]

expose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#expose ConfigEntryServiceDefaults#expose}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the service you are setting the defaults for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

##### `balanceInboundConnections`<sup>Optional</sup> <a name="balanceInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.balanceInboundConnections"></a>

```typescript
public readonly balanceInboundConnections: string;
```

- *Type:* string

Specifies the strategy for allocating inbound connections to the service across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_inbound_connections ConfigEntryServiceDefaults#balance_inbound_connections}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.destination"></a>

```typescript
public readonly destination: IResolvable | ConfigEntryServiceDefaultsDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#destination ConfigEntryServiceDefaults#destination}

---

##### `envoyExtensions`<sup>Optional</sup> <a name="envoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.envoyExtensions"></a>

```typescript
public readonly envoyExtensions: IResolvable | ConfigEntryServiceDefaultsEnvoyExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>[]

envoy_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_extensions ConfigEntryServiceDefaults#envoy_extensions}

---

##### `externalSni`<sup>Optional</sup> <a name="externalSni" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.externalSni"></a>

```typescript
public readonly externalSni: string;
```

- *Type:* string

Specifies the TLS server name indication (SNI) when federating with an external system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#external_sni ConfigEntryServiceDefaults#external_sni}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#id ConfigEntryServiceDefaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localConnectTimeoutMs`<sup>Optional</sup> <a name="localConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localConnectTimeoutMs"></a>

```typescript
public readonly localConnectTimeoutMs: number;
```

- *Type:* number

Specifies the number of milliseconds allowed for establishing connections to the local application instance before timing out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_connect_timeout_ms ConfigEntryServiceDefaults#local_connect_timeout_ms}

---

##### `localRequestTimeoutMs`<sup>Optional</sup> <a name="localRequestTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.localRequestTimeoutMs"></a>

```typescript
public readonly localRequestTimeoutMs: number;
```

- *Type:* number

Specifies the timeout for HTTP requests to the local application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_request_timeout_ms ConfigEntryServiceDefaults#local_request_timeout_ms}

---

##### `maxInboundConnections`<sup>Optional</sup> <a name="maxInboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.maxInboundConnections"></a>

```typescript
public readonly maxInboundConnections: number;
```

- *Type:* number

Specifies the maximum number of concurrent inbound connections to each service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_inbound_connections ConfigEntryServiceDefaults#max_inbound_connections}

---

##### `meshGateway`<sup>Optional</sup> <a name="meshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meshGateway"></a>

```typescript
public readonly meshGateway: IResolvable | ConfigEntryServiceDefaultsMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>[]

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `meta`<sup>Optional</sup> <a name="meta" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.meta"></a>

```typescript
public readonly meta: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a set of custom key-value pairs to add to the Consul KV store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#meta ConfigEntryServiceDefaults#meta}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Specifies a mode for how the service directs inbound and outbound traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}

---

##### `mutualTlsMode`<sup>Optional</sup> <a name="mutualTlsMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.mutualTlsMode"></a>

```typescript
public readonly mutualTlsMode: string;
```

- *Type:* string

Controls whether mutual TLS is required for incoming connections to this service.

This setting is only supported for services with transparent proxy enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mutual_tls_mode ConfigEntryServiceDefaults#mutual_tls_mode}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the Consul namespace that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the name of the name of the Consul admin partition that the configuration entry applies to.

Refer to Admin Partitions for additional information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}

---

##### `transparentProxy`<sup>Optional</sup> <a name="transparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.transparentProxy"></a>

```typescript
public readonly transparentProxy: IResolvable | ConfigEntryServiceDefaultsTransparentProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>[]

transparent_proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#transparent_proxy ConfigEntryServiceDefaults#transparent_proxy}

---

##### `upstreamConfig`<sup>Optional</sup> <a name="upstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsConfig.property.upstreamConfig"></a>

```typescript
public readonly upstreamConfig: IResolvable | ConfigEntryServiceDefaultsUpstreamConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>[]

upstream_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#upstream_config ConfigEntryServiceDefaults#upstream_config}

---

### ConfigEntryServiceDefaultsDestination <a name="ConfigEntryServiceDefaultsDestination" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsDestination: configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.addresses">addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#addresses ConfigEntryServiceDefaults#addresses}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#port ConfigEntryServiceDefaults#port}. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#addresses ConfigEntryServiceDefaults#addresses}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#port ConfigEntryServiceDefaults#port}.

---

### ConfigEntryServiceDefaultsEnvoyExtensions <a name="ConfigEntryServiceDefaultsEnvoyExtensions" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsEnvoyExtensions: configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#arguments ConfigEntryServiceDefaults#arguments}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.consulVersion">consulVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#consul_version ConfigEntryServiceDefaults#consul_version}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.envoyVersion">envoyVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_version ConfigEntryServiceDefaults#envoy_version}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#required ConfigEntryServiceDefaults#required}. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#arguments ConfigEntryServiceDefaults#arguments}.

---

##### `consulVersion`<sup>Optional</sup> <a name="consulVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.consulVersion"></a>

```typescript
public readonly consulVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#consul_version ConfigEntryServiceDefaults#consul_version}.

---

##### `envoyVersion`<sup>Optional</sup> <a name="envoyVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.envoyVersion"></a>

```typescript
public readonly envoyVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_version ConfigEntryServiceDefaults#envoy_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#required ConfigEntryServiceDefaults#required}.

---

### ConfigEntryServiceDefaultsExpose <a name="ConfigEntryServiceDefaultsExpose" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsExpose: configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.checks">checks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#checks ConfigEntryServiceDefaults#checks}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.paths">paths</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>[]</code> | paths block. |

---

##### `checks`<sup>Optional</sup> <a name="checks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.checks"></a>

```typescript
public readonly checks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#checks ConfigEntryServiceDefaults#checks}.

---

##### `paths`<sup>Optional</sup> <a name="paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose.property.paths"></a>

```typescript
public readonly paths: IResolvable | ConfigEntryServiceDefaultsExposePaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>[]

paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#paths ConfigEntryServiceDefaults#paths}

---

### ConfigEntryServiceDefaultsExposePaths <a name="ConfigEntryServiceDefaultsExposePaths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsExposePaths: configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.listenerPort">listenerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#listener_port ConfigEntryServiceDefaults#listener_port}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.localPathPort">localPathPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_path_port ConfigEntryServiceDefaults#local_path_port}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#path ConfigEntryServiceDefaults#path}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}. |

---

##### `listenerPort`<sup>Optional</sup> <a name="listenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#listener_port ConfigEntryServiceDefaults#listener_port}.

---

##### `localPathPort`<sup>Optional</sup> <a name="localPathPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.localPathPort"></a>

```typescript
public readonly localPathPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#local_path_port ConfigEntryServiceDefaults#local_path_port}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#path ConfigEntryServiceDefaults#path}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}.

---

### ConfigEntryServiceDefaultsMeshGateway <a name="ConfigEntryServiceDefaultsMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsMeshGateway: configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsTransparentProxy <a name="ConfigEntryServiceDefaultsTransparentProxy" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsTransparentProxy: configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.dialedDirectly">dialedDirectly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#dialed_directly ConfigEntryServiceDefaults#dialed_directly}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.outboundListenerPort">outboundListenerPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#outbound_listener_port ConfigEntryServiceDefaults#outbound_listener_port}. |

---

##### `dialedDirectly`<sup>Required</sup> <a name="dialedDirectly" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.dialedDirectly"></a>

```typescript
public readonly dialedDirectly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#dialed_directly ConfigEntryServiceDefaults#dialed_directly}.

---

##### `outboundListenerPort`<sup>Required</sup> <a name="outboundListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy.property.outboundListenerPort"></a>

```typescript
public readonly outboundListenerPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#outbound_listener_port ConfigEntryServiceDefaults#outbound_listener_port}.

---

### ConfigEntryServiceDefaultsUpstreamConfig <a name="ConfigEntryServiceDefaultsUpstreamConfig" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfig: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.defaults">defaults</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>[]</code> | defaults block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.overrides">overrides</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>[]</code> | overrides block. |

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.defaults"></a>

```typescript
public readonly defaults: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaults[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>[]

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#defaults ConfigEntryServiceDefaults#defaults}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig.property.overrides"></a>

```typescript
public readonly overrides: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>[]

overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#overrides ConfigEntryServiceDefaults#overrides}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaults <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigDefaults: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.balanceOutboundConnections">balanceOutboundConnections</a></code> | <code>string</code> | Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.connectTimeoutMs">connectTimeoutMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.limits">limits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>[]</code> | limits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.meshGateway">meshGateway</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>[]</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.passiveHealthCheck">passiveHealthCheck</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>[]</code> | passive_health_check block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.protocol">protocol</a></code> | <code>string</code> | Specifies the default protocol for the service. |

---

##### `balanceOutboundConnections`<sup>Optional</sup> <a name="balanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.balanceOutboundConnections"></a>

```typescript
public readonly balanceOutboundConnections: string;
```

- *Type:* string

Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}

---

##### `connectTimeoutMs`<sup>Optional</sup> <a name="connectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.connectTimeoutMs"></a>

```typescript
public readonly connectTimeoutMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.limits"></a>

```typescript
public readonly limits: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>[]

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}

---

##### `meshGateway`<sup>Optional</sup> <a name="meshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.meshGateway"></a>

```typescript
public readonly meshGateway: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>[]

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `passiveHealthCheck`<sup>Optional</sup> <a name="passiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.passiveHealthCheck"></a>

```typescript
public readonly passiveHealthCheck: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>[]

passive_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigDefaultsLimits: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | Specifies the maximum number of concurrent requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConnections">maxConnections</a></code> | <code>number</code> | Specifies the maximum number of connections a service instance can establish against the upstream. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | Specifies the maximum number of requests that are queued while waiting for a connection to establish. |

---

##### `maxConcurrentRequests`<sup>Optional</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

Specifies the maximum number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

Specifies the maximum number of connections a service instance can establish against the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

Specifies the maximum number of requests that are queued while waiting for a connection to establish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.baseEjectionTime">baseEjectionTime</a></code> | <code>string</code> | Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.enforcingConsecutive5Xx">enforcingConsecutive5Xx</a></code> | <code>number</code> | Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.interval">interval</a></code> | <code>string</code> | Specifies the time between checks. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxFailures">maxFailures</a></code> | <code>number</code> | Specifies the number of consecutive failures allowed per check interval. |

---

##### `baseEjectionTime`<sup>Optional</sup> <a name="baseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: string;
```

- *Type:* string

Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}

---

##### `enforcingConsecutive5Xx`<sup>Optional</sup> <a name="enforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.enforcingConsecutive5Xx"></a>

```typescript
public readonly enforcingConsecutive5Xx: number;
```

- *Type:* number

Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Specifies the time between checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}

---

##### `maxEjectionPercent`<sup>Optional</sup> <a name="maxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}

---

##### `maxFailures`<sup>Optional</sup> <a name="maxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck.property.maxFailures"></a>

```typescript
public readonly maxFailures: number;
```

- *Type:* number

Specifies the number of consecutive failures allowed per check interval.

If exceeded, Consul removes the host from the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverrides <a name="ConfigEntryServiceDefaultsUpstreamConfigOverrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigOverrides: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.balanceOutboundConnections">balanceOutboundConnections</a></code> | <code>string</code> | Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.connectTimeoutMs">connectTimeoutMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.envoyListenerJson">envoyListenerJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_listener_json ConfigEntryServiceDefaults#envoy_listener_json}. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.limits">limits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>[]</code> | limits block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.meshGateway">meshGateway</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>[]</code> | mesh_gateway block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.name">name</a></code> | <code>string</code> | Specifies the name of the service you are setting the defaults for. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.namespace">namespace</a></code> | <code>string</code> | Specifies the namespace containing the upstream service that the configuration applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.partition">partition</a></code> | <code>string</code> | Specifies the name of the name of the Consul admin partition that the configuration entry applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.passiveHealthCheck">passiveHealthCheck</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>[]</code> | passive_health_check block. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.peer">peer</a></code> | <code>string</code> | Specifies the peer name of the upstream service that the configuration applies to. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.protocol">protocol</a></code> | <code>string</code> | Specifies the default protocol for the service. |

---

##### `balanceOutboundConnections`<sup>Optional</sup> <a name="balanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.balanceOutboundConnections"></a>

```typescript
public readonly balanceOutboundConnections: string;
```

- *Type:* string

Sets the strategy for allocating outbound connections from upstreams across Envoy proxy threads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#balance_outbound_connections ConfigEntryServiceDefaults#balance_outbound_connections}

---

##### `connectTimeoutMs`<sup>Optional</sup> <a name="connectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.connectTimeoutMs"></a>

```typescript
public readonly connectTimeoutMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#connect_timeout_ms ConfigEntryServiceDefaults#connect_timeout_ms}.

---

##### `envoyListenerJson`<sup>Optional</sup> <a name="envoyListenerJson" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.envoyListenerJson"></a>

```typescript
public readonly envoyListenerJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#envoy_listener_json ConfigEntryServiceDefaults#envoy_listener_json}.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.limits"></a>

```typescript
public readonly limits: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>[]

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#limits ConfigEntryServiceDefaults#limits}

---

##### `meshGateway`<sup>Optional</sup> <a name="meshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.meshGateway"></a>

```typescript
public readonly meshGateway: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>[]

mesh_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mesh_gateway ConfigEntryServiceDefaults#mesh_gateway}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the service you are setting the defaults for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#name ConfigEntryServiceDefaults#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Specifies the namespace containing the upstream service that the configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#namespace ConfigEntryServiceDefaults#namespace}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Specifies the name of the name of the Consul admin partition that the configuration entry applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#partition ConfigEntryServiceDefaults#partition}

---

##### `passiveHealthCheck`<sup>Optional</sup> <a name="passiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.passiveHealthCheck"></a>

```typescript
public readonly passiveHealthCheck: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>[]

passive_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#passive_health_check ConfigEntryServiceDefaults#passive_health_check}

---

##### `peer`<sup>Optional</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

Specifies the peer name of the upstream service that the configuration applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#peer ConfigEntryServiceDefaults#peer}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Specifies the default protocol for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#protocol ConfigEntryServiceDefaults#protocol}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigOverridesLimits: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | Specifies the maximum number of concurrent requests. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConnections">maxConnections</a></code> | <code>number</code> | Specifies the maximum number of connections a service instance can establish against the upstream. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | Specifies the maximum number of requests that are queued while waiting for a connection to establish. |

---

##### `maxConcurrentRequests`<sup>Optional</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

Specifies the maximum number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_concurrent_requests ConfigEntryServiceDefaults#max_concurrent_requests}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

Specifies the maximum number of connections a service instance can establish against the upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_connections ConfigEntryServiceDefaults#max_connections}

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

Specifies the maximum number of requests that are queued while waiting for a connection to establish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_pending_requests ConfigEntryServiceDefaults#max_pending_requests}

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigOverridesMeshGateway: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#mode ConfigEntryServiceDefaults#mode}.

---

### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

const configEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck: configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.baseEjectionTime">baseEjectionTime</a></code> | <code>string</code> | Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.enforcingConsecutive5Xx">enforcingConsecutive5Xx</a></code> | <code>number</code> | Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.interval">interval</a></code> | <code>string</code> | Specifies the time between checks. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxFailures">maxFailures</a></code> | <code>number</code> | Specifies the number of consecutive failures allowed per check interval. |

---

##### `baseEjectionTime`<sup>Optional</sup> <a name="baseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: string;
```

- *Type:* string

Specifies the minimum amount of time that an ejected host must remain outside the cluster before rejoining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#base_ejection_time ConfigEntryServiceDefaults#base_ejection_time}

---

##### `enforcingConsecutive5Xx`<sup>Optional</sup> <a name="enforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.enforcingConsecutive5Xx"></a>

```typescript
public readonly enforcingConsecutive5Xx: number;
```

- *Type:* number

Specifies a percentage that indicates how many times out of 100 that Consul ejects the host when it detects an outlier status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#enforcing_consecutive_5xx ConfigEntryServiceDefaults#enforcing_consecutive_5xx}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Specifies the time between checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#interval ConfigEntryServiceDefaults#interval}

---

##### `maxEjectionPercent`<sup>Optional</sup> <a name="maxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

Specifies the maximum percentage of an upstream cluster that Consul ejects when the proxy reports an outlier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_ejection_percent ConfigEntryServiceDefaults#max_ejection_percent}

---

##### `maxFailures`<sup>Optional</sup> <a name="maxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck.property.maxFailures"></a>

```typescript
public readonly maxFailures: number;
```

- *Type:* number

Specifies the number of consecutive failures allowed per check interval.

If exceeded, Consul removes the host from the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/config_entry_service_defaults#max_failures ConfigEntryServiceDefaults#max_failures}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigEntryServiceDefaultsDestinationList <a name="ConfigEntryServiceDefaultsDestinationList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>[]

---


### ConfigEntryServiceDefaultsDestinationOutputReference <a name="ConfigEntryServiceDefaultsDestinationOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addressesInput">addressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addressesInput"></a>

```typescript
public readonly addressesInput: string[];
```

- *Type:* string[]

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsDestination">ConfigEntryServiceDefaultsDestination</a>

---


### ConfigEntryServiceDefaultsEnvoyExtensionsList <a name="ConfigEntryServiceDefaultsEnvoyExtensionsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsEnvoyExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>[]

---


### ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference <a name="ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetConsulVersion">resetConsulVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetEnvoyVersion">resetEnvoyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetConsulVersion` <a name="resetConsulVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetConsulVersion"></a>

```typescript
public resetConsulVersion(): void
```

##### `resetEnvoyVersion` <a name="resetEnvoyVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetEnvoyVersion"></a>

```typescript
public resetEnvoyVersion(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersionInput">consulVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersionInput">envoyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersion">consulVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersion">envoyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `consulVersionInput`<sup>Optional</sup> <a name="consulVersionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersionInput"></a>

```typescript
public readonly consulVersionInput: string;
```

- *Type:* string

---

##### `envoyVersionInput`<sup>Optional</sup> <a name="envoyVersionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersionInput"></a>

```typescript
public readonly envoyVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `consulVersion`<sup>Required</sup> <a name="consulVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.consulVersion"></a>

```typescript
public readonly consulVersion: string;
```

- *Type:* string

---

##### `envoyVersion`<sup>Required</sup> <a name="envoyVersion" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.envoyVersion"></a>

```typescript
public readonly envoyVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsEnvoyExtensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsEnvoyExtensions">ConfigEntryServiceDefaultsEnvoyExtensions</a>

---


### ConfigEntryServiceDefaultsExposeList <a name="ConfigEntryServiceDefaultsExposeList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsExposeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsExpose[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>[]

---


### ConfigEntryServiceDefaultsExposeOutputReference <a name="ConfigEntryServiceDefaultsExposeOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths">putPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetChecks">resetChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetPaths">resetPaths</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPaths` <a name="putPaths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths"></a>

```typescript
public putPaths(value: IResolvable | ConfigEntryServiceDefaultsExposePaths[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.putPaths.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>[]

---

##### `resetChecks` <a name="resetChecks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetChecks"></a>

```typescript
public resetChecks(): void
```

##### `resetPaths` <a name="resetPaths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.resetPaths"></a>

```typescript
public resetPaths(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.paths">paths</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList">ConfigEntryServiceDefaultsExposePathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checksInput">checksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.pathsInput">pathsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checks">checks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.paths"></a>

```typescript
public readonly paths: ConfigEntryServiceDefaultsExposePathsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList">ConfigEntryServiceDefaultsExposePathsList</a>

---

##### `checksInput`<sup>Optional</sup> <a name="checksInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checksInput"></a>

```typescript
public readonly checksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.pathsInput"></a>

```typescript
public readonly pathsInput: IResolvable | ConfigEntryServiceDefaultsExposePaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>[]

---

##### `checks`<sup>Required</sup> <a name="checks" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.checks"></a>

```typescript
public readonly checks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsExpose;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExpose">ConfigEntryServiceDefaultsExpose</a>

---


### ConfigEntryServiceDefaultsExposePathsList <a name="ConfigEntryServiceDefaultsExposePathsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsExposePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsExposePaths[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>[]

---


### ConfigEntryServiceDefaultsExposePathsOutputReference <a name="ConfigEntryServiceDefaultsExposePathsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetListenerPort">resetListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetLocalPathPort">resetLocalPathPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetListenerPort` <a name="resetListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetListenerPort"></a>

```typescript
public resetListenerPort(): void
```

##### `resetLocalPathPort` <a name="resetLocalPathPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetLocalPathPort"></a>

```typescript
public resetLocalPathPort(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPortInput">listenerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPortInput">localPathPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPort">localPathPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `listenerPortInput`<sup>Optional</sup> <a name="listenerPortInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPortInput"></a>

```typescript
public readonly listenerPortInput: number;
```

- *Type:* number

---

##### `localPathPortInput`<sup>Optional</sup> <a name="localPathPortInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPortInput"></a>

```typescript
public readonly localPathPortInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `localPathPort`<sup>Required</sup> <a name="localPathPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.localPathPort"></a>

```typescript
public readonly localPathPort: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePathsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsExposePaths;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsExposePaths">ConfigEntryServiceDefaultsExposePaths</a>

---


### ConfigEntryServiceDefaultsMeshGatewayList <a name="ConfigEntryServiceDefaultsMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsMeshGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>[]

---


### ConfigEntryServiceDefaultsMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsMeshGateway;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsMeshGateway">ConfigEntryServiceDefaultsMeshGateway</a>

---


### ConfigEntryServiceDefaultsTransparentProxyList <a name="ConfigEntryServiceDefaultsTransparentProxyList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsTransparentProxyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsTransparentProxy[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>[]

---


### ConfigEntryServiceDefaultsTransparentProxyOutputReference <a name="ConfigEntryServiceDefaultsTransparentProxyOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectlyInput">dialedDirectlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPortInput">outboundListenerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectly">dialedDirectly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPort">outboundListenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dialedDirectlyInput`<sup>Optional</sup> <a name="dialedDirectlyInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectlyInput"></a>

```typescript
public readonly dialedDirectlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outboundListenerPortInput`<sup>Optional</sup> <a name="outboundListenerPortInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPortInput"></a>

```typescript
public readonly outboundListenerPortInput: number;
```

- *Type:* number

---

##### `dialedDirectly`<sup>Required</sup> <a name="dialedDirectly" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.dialedDirectly"></a>

```typescript
public readonly dialedDirectly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outboundListenerPort`<sup>Required</sup> <a name="outboundListenerPort" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.outboundListenerPort"></a>

```typescript
public readonly outboundListenerPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsTransparentProxy;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsTransparentProxy">ConfigEntryServiceDefaultsTransparentProxy</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConcurrentRequests">resetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentRequests` <a name="resetMaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConcurrentRequests"></a>

```typescript
public resetMaxConcurrentRequests(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.resetMaxPendingRequests"></a>

```typescript
public resetMaxPendingRequests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequestsInput">maxConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrentRequestsInput`<sup>Optional</sup> <a name="maxConcurrentRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequestsInput"></a>

```typescript
public readonly maxConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequestsInput"></a>

```typescript
public readonly maxPendingRequestsInput: number;
```

- *Type:* number

---

##### `maxConcurrentRequests`<sup>Required</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaults[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway">putMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck">putPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetBalanceOutboundConnections">resetBalanceOutboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetConnectTimeoutMs">resetConnectTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetMeshGateway">resetMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetPassiveHealthCheck">resetPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimits` <a name="putLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits"></a>

```typescript
public putLimits(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>[]

---

##### `putMeshGateway` <a name="putMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway"></a>

```typescript
public putMeshGateway(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putMeshGateway.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>[]

---

##### `putPassiveHealthCheck` <a name="putPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck"></a>

```typescript
public putPassiveHealthCheck(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.putPassiveHealthCheck.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>[]

---

##### `resetBalanceOutboundConnections` <a name="resetBalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetBalanceOutboundConnections"></a>

```typescript
public resetBalanceOutboundConnections(): void
```

##### `resetConnectTimeoutMs` <a name="resetConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetConnectTimeoutMs"></a>

```typescript
public resetConnectTimeoutMs(): void
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetMeshGateway` <a name="resetMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetMeshGateway"></a>

```typescript
public resetMeshGateway(): void
```

##### `resetPassiveHealthCheck` <a name="resetPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetPassiveHealthCheck"></a>

```typescript
public resetPassiveHealthCheck(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGateway">meshGateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheck">passiveHealthCheck</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnectionsInput">balanceOutboundConnectionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMsInput">connectTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limitsInput">limitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGatewayInput">meshGatewayInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheckInput">passiveHealthCheckInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnections">balanceOutboundConnections</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMs">connectTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limits"></a>

```typescript
public readonly limits: ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimitsList</a>

---

##### `meshGateway`<sup>Required</sup> <a name="meshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGateway"></a>

```typescript
public readonly meshGateway: ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGatewayList</a>

---

##### `passiveHealthCheck`<sup>Required</sup> <a name="passiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheck"></a>

```typescript
public readonly passiveHealthCheck: ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList</a>

---

##### `balanceOutboundConnectionsInput`<sup>Optional</sup> <a name="balanceOutboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnectionsInput"></a>

```typescript
public readonly balanceOutboundConnectionsInput: string;
```

- *Type:* string

---

##### `connectTimeoutMsInput`<sup>Optional</sup> <a name="connectTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMsInput"></a>

```typescript
public readonly connectTimeoutMsInput: number;
```

- *Type:* number

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits">ConfigEntryServiceDefaultsUpstreamConfigDefaultsLimits</a>[]

---

##### `meshGatewayInput`<sup>Optional</sup> <a name="meshGatewayInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.meshGatewayInput"></a>

```typescript
public readonly meshGatewayInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigDefaultsMeshGateway</a>[]

---

##### `passiveHealthCheckInput`<sup>Optional</sup> <a name="passiveHealthCheckInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.passiveHealthCheckInput"></a>

```typescript
public readonly passiveHealthCheckInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `balanceOutboundConnections`<sup>Required</sup> <a name="balanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.balanceOutboundConnections"></a>

```typescript
public readonly balanceOutboundConnections: string;
```

- *Type:* string

---

##### `connectTimeoutMs`<sup>Required</sup> <a name="connectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.connectTimeoutMs"></a>

```typescript
public readonly connectTimeoutMs: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaults;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetBaseEjectionTime">resetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx">resetEnforcingConsecutive5Xx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxEjectionPercent">resetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxFailures">resetMaxFailures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseEjectionTime` <a name="resetBaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetBaseEjectionTime"></a>

```typescript
public resetBaseEjectionTime(): void
```

##### `resetEnforcingConsecutive5Xx` <a name="resetEnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx"></a>

```typescript
public resetEnforcingConsecutive5Xx(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMaxEjectionPercent` <a name="resetMaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxEjectionPercent"></a>

```typescript
public resetMaxEjectionPercent(): void
```

##### `resetMaxFailures` <a name="resetMaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.resetMaxFailures"></a>

```typescript
public resetMaxFailures(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTimeInput">baseEjectionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput">enforcingConsecutive5XxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercentInput">maxEjectionPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailuresInput">maxFailuresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx">enforcingConsecutive5Xx</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailures">maxFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseEjectionTimeInput`<sup>Optional</sup> <a name="baseEjectionTimeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTimeInput"></a>

```typescript
public readonly baseEjectionTimeInput: string;
```

- *Type:* string

---

##### `enforcingConsecutive5XxInput`<sup>Optional</sup> <a name="enforcingConsecutive5XxInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput"></a>

```typescript
public readonly enforcingConsecutive5XxInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `maxEjectionPercentInput`<sup>Optional</sup> <a name="maxEjectionPercentInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercentInput"></a>

```typescript
public readonly maxEjectionPercentInput: number;
```

- *Type:* number

---

##### `maxFailuresInput`<sup>Optional</sup> <a name="maxFailuresInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailuresInput"></a>

```typescript
public readonly maxFailuresInput: number;
```

- *Type:* number

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: string;
```

- *Type:* string

---

##### `enforcingConsecutive5Xx`<sup>Required</sup> <a name="enforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx"></a>

```typescript
public readonly enforcingConsecutive5Xx: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

---

##### `maxFailures`<sup>Required</sup> <a name="maxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.maxFailures"></a>

```typescript
public readonly maxFailures: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigDefaultsPassiveHealthCheck</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigList <a name="ConfigEntryServiceDefaultsUpstreamConfigList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults">putDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetDefaults">resetDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaults` <a name="putDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults"></a>

```typescript
public putDefaults(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaults[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putDefaults.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>[]

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>[]

---

##### `resetDefaults` <a name="resetDefaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetDefaults"></a>

```typescript
public resetDefaults(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.resetOverrides"></a>

```typescript
public resetOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList">ConfigEntryServiceDefaultsUpstreamConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaultsInput">defaultsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overridesInput">overridesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaults"></a>

```typescript
public readonly defaults: ConfigEntryServiceDefaultsUpstreamConfigDefaultsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaultsList">ConfigEntryServiceDefaultsUpstreamConfigDefaultsList</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overrides"></a>

```typescript
public readonly overrides: ConfigEntryServiceDefaultsUpstreamConfigOverridesList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList">ConfigEntryServiceDefaultsUpstreamConfigOverridesList</a>

---

##### `defaultsInput`<sup>Optional</sup> <a name="defaultsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.defaultsInput"></a>

```typescript
public readonly defaultsInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigDefaults[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigDefaults">ConfigEntryServiceDefaultsUpstreamConfigDefaults</a>[]

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfig">ConfigEntryServiceDefaultsUpstreamConfig</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConcurrentRequests">resetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentRequests` <a name="resetMaxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConcurrentRequests"></a>

```typescript
public resetMaxConcurrentRequests(): void
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxConnections"></a>

```typescript
public resetMaxConnections(): void
```

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.resetMaxPendingRequests"></a>

```typescript
public resetMaxPendingRequests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequestsInput">maxConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrentRequestsInput`<sup>Optional</sup> <a name="maxConcurrentRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequestsInput"></a>

```typescript
public readonly maxConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequestsInput"></a>

```typescript
public readonly maxPendingRequestsInput: number;
```

- *Type:* number

---

##### `maxConcurrentRequests`<sup>Required</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.maxPendingRequests"></a>

```typescript
public readonly maxPendingRequests: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverrides[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway">putMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck">putPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetBalanceOutboundConnections">resetBalanceOutboundConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetConnectTimeoutMs">resetConnectTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetEnvoyListenerJson">resetEnvoyListenerJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetMeshGateway">resetMeshGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPassiveHealthCheck">resetPassiveHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPeer">resetPeer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLimits` <a name="putLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits"></a>

```typescript
public putLimits(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putLimits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>[]

---

##### `putMeshGateway` <a name="putMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway"></a>

```typescript
public putMeshGateway(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putMeshGateway.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>[]

---

##### `putPassiveHealthCheck` <a name="putPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck"></a>

```typescript
public putPassiveHealthCheck(value: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.putPassiveHealthCheck.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>[]

---

##### `resetBalanceOutboundConnections` <a name="resetBalanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetBalanceOutboundConnections"></a>

```typescript
public resetBalanceOutboundConnections(): void
```

##### `resetConnectTimeoutMs` <a name="resetConnectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetConnectTimeoutMs"></a>

```typescript
public resetConnectTimeoutMs(): void
```

##### `resetEnvoyListenerJson` <a name="resetEnvoyListenerJson" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetEnvoyListenerJson"></a>

```typescript
public resetEnvoyListenerJson(): void
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetMeshGateway` <a name="resetMeshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetMeshGateway"></a>

```typescript
public resetMeshGateway(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetPassiveHealthCheck` <a name="resetPassiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPassiveHealthCheck"></a>

```typescript
public resetPassiveHealthCheck(): void
```

##### `resetPeer` <a name="resetPeer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetPeer"></a>

```typescript
public resetPeer(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGateway">meshGateway</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheck">passiveHealthCheck</a></code> | <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnectionsInput">balanceOutboundConnectionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMsInput">connectTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJsonInput">envoyListenerJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limitsInput">limitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGatewayInput">meshGatewayInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partitionInput">partitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheckInput">passiveHealthCheckInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peerInput">peerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnections">balanceOutboundConnections</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMs">connectTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJson">envoyListenerJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peer">peer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limits"></a>

```typescript
public readonly limits: ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimitsList</a>

---

##### `meshGateway`<sup>Required</sup> <a name="meshGateway" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGateway"></a>

```typescript
public readonly meshGateway: ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGatewayList</a>

---

##### `passiveHealthCheck`<sup>Required</sup> <a name="passiveHealthCheck" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheck"></a>

```typescript
public readonly passiveHealthCheck: ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList;
```

- *Type:* <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList</a>

---

##### `balanceOutboundConnectionsInput`<sup>Optional</sup> <a name="balanceOutboundConnectionsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnectionsInput"></a>

```typescript
public readonly balanceOutboundConnectionsInput: string;
```

- *Type:* string

---

##### `connectTimeoutMsInput`<sup>Optional</sup> <a name="connectTimeoutMsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMsInput"></a>

```typescript
public readonly connectTimeoutMsInput: number;
```

- *Type:* number

---

##### `envoyListenerJsonInput`<sup>Optional</sup> <a name="envoyListenerJsonInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJsonInput"></a>

```typescript
public readonly envoyListenerJsonInput: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.limitsInput"></a>

```typescript
public readonly limitsInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits">ConfigEntryServiceDefaultsUpstreamConfigOverridesLimits</a>[]

---

##### `meshGatewayInput`<sup>Optional</sup> <a name="meshGatewayInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.meshGatewayInput"></a>

```typescript
public readonly meshGatewayInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway">ConfigEntryServiceDefaultsUpstreamConfigOverridesMeshGateway</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: string;
```

- *Type:* string

---

##### `passiveHealthCheckInput`<sup>Optional</sup> <a name="passiveHealthCheckInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.passiveHealthCheckInput"></a>

```typescript
public readonly passiveHealthCheckInput: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>[]

---

##### `peerInput`<sup>Optional</sup> <a name="peerInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peerInput"></a>

```typescript
public readonly peerInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `balanceOutboundConnections`<sup>Required</sup> <a name="balanceOutboundConnections" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.balanceOutboundConnections"></a>

```typescript
public readonly balanceOutboundConnections: string;
```

- *Type:* string

---

##### `connectTimeoutMs`<sup>Required</sup> <a name="connectTimeoutMs" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.connectTimeoutMs"></a>

```typescript
public readonly connectTimeoutMs: number;
```

- *Type:* number

---

##### `envoyListenerJson`<sup>Required</sup> <a name="envoyListenerJson" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.envoyListenerJson"></a>

```typescript
public readonly envoyListenerJson: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `peer`<sup>Required</sup> <a name="peer" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.peer"></a>

```typescript
public readonly peer: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverrides;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverrides">ConfigEntryServiceDefaultsUpstreamConfigOverrides</a>

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get"></a>

```typescript
public get(index: number): ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>[]

---


### ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference <a name="ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer"></a>

```typescript
import { configEntryServiceDefaults } from '@cdktf/provider-consul'

new configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetBaseEjectionTime">resetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx">resetEnforcingConsecutive5Xx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxEjectionPercent">resetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxFailures">resetMaxFailures</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseEjectionTime` <a name="resetBaseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetBaseEjectionTime"></a>

```typescript
public resetBaseEjectionTime(): void
```

##### `resetEnforcingConsecutive5Xx` <a name="resetEnforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetEnforcingConsecutive5Xx"></a>

```typescript
public resetEnforcingConsecutive5Xx(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetMaxEjectionPercent` <a name="resetMaxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxEjectionPercent"></a>

```typescript
public resetMaxEjectionPercent(): void
```

##### `resetMaxFailures` <a name="resetMaxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.resetMaxFailures"></a>

```typescript
public resetMaxFailures(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTimeInput">baseEjectionTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput">enforcingConsecutive5XxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercentInput">maxEjectionPercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailuresInput">maxFailuresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx">enforcingConsecutive5Xx</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailures">maxFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseEjectionTimeInput`<sup>Optional</sup> <a name="baseEjectionTimeInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTimeInput"></a>

```typescript
public readonly baseEjectionTimeInput: string;
```

- *Type:* string

---

##### `enforcingConsecutive5XxInput`<sup>Optional</sup> <a name="enforcingConsecutive5XxInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5XxInput"></a>

```typescript
public readonly enforcingConsecutive5XxInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `maxEjectionPercentInput`<sup>Optional</sup> <a name="maxEjectionPercentInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercentInput"></a>

```typescript
public readonly maxEjectionPercentInput: number;
```

- *Type:* number

---

##### `maxFailuresInput`<sup>Optional</sup> <a name="maxFailuresInput" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailuresInput"></a>

```typescript
public readonly maxFailuresInput: number;
```

- *Type:* number

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.baseEjectionTime"></a>

```typescript
public readonly baseEjectionTime: string;
```

- *Type:* string

---

##### `enforcingConsecutive5Xx`<sup>Required</sup> <a name="enforcingConsecutive5Xx" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.enforcingConsecutive5Xx"></a>

```typescript
public readonly enforcingConsecutive5Xx: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxEjectionPercent"></a>

```typescript
public readonly maxEjectionPercent: number;
```

- *Type:* number

---

##### `maxFailures`<sup>Required</sup> <a name="maxFailures" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.maxFailures"></a>

```typescript
public readonly maxFailures: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-consul.configEntryServiceDefaults.ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck">ConfigEntryServiceDefaultsUpstreamConfigOverridesPassiveHealthCheck</a>

---



